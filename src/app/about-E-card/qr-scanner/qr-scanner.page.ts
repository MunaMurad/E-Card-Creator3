import { InvitationService } from './../../services/InvitationService';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ToastController, ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { LoadingController } from '@ionic/angular';
import jsQR from "jsqr";
//import for counter function:
import{InvitationDetails} from'../../congratspages/image-editor/InvitationDetails';
import { EncryptionService } from './../../services/encryption.service';
import { firestore } from 'firebase';
import { ModalContentPage } from 'src/app/ui-components/modal-content/modal-content.page';




@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.page.html',
  styleUrls: ['./qr-scanner.page.scss'],
})
export class QRScannerPage implements OnInit {

  scanResult= null;
  scanActive=false;
  @ViewChild("video",{static:false}) video:ElementRef;
  @ViewChild("canvas",{static:false}) canvas:ElementRef;
  @ViewChild("fileinput",{static:false}) fileinput:ElementRef;
  videoElement:any;
  canvasElement:any;
  canvasContext:any;
  loading:HTMLIonLoadingElement;
 
  ///new var for counter
  
  decryptedText:any;
  CurrentCount=null;
  AllowedAttendees:any;
  qrData:any;
  codeDetails:any;
  firestore:any; 



  //private encryptionService: EncryptionService
  constructor(private toastCtrl:ToastController, 
    private loadingCtrl:LoadingController, 
    private modalCtrl: ModalController,
    private encryptionService:EncryptionService,
    private invitationService:InvitationService) 
    { 
    }

  ngAfterViewInit(){

    this.videoElement=this.video.nativeElement;
    this.canvasElement=this.canvas.nativeElement;
    this.canvasContext=this.canvasElement.getContext('2d');
  }

  captureImage(){
    this.fileinput.nativeElement.click();
  }

  handleFile(event: Event){
    console.log('handleFile started')
    try{
      const target= event.target as HTMLInputElement;
      const file: File = (target.files as FileList)[0];
      var img =new Image();
      img.onload= async() =>{
        this.canvasContext.drawImage(img, 0, 0, this.canvasElement.width, this.canvasElement.height);
        const imageData=this.canvasContext.getImageData(0,0, this.canvasElement.width, this.canvasElement.height);
        const code = jsQR(imageData.data,imageData.width,imageData.height,{
          inversionAttempts:'dontInvert'
        });
        if(code){
          this.qrData = code.data;
          console.log('started 1');
          await this.CountScanner();
          // this.showQrToast();
        }
        
      };
      img.src=URL.createObjectURL(file);
    }catch(ex){
      console.log(ex);
    }
    
  }

  async startScan(){
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {facingMode:'environment'}
    });
    this.videoElement.srcObject= stream;
    this.videoElement.setAttribute('playsinline', true);
    this.videoElement.play();

    this.loading= await this.loadingCtrl.create({});
    await this.loading.present(); 
    requestAnimationFrame(this.scan.bind(this));
  }

  async scan(){
    console.log('SCAN');  
    if(this.videoElement.readyState===this.videoElement.HAVE_ENOUGH_DATA){
        if(this.loading){
          await this.loading.dismiss();
          this.loading=null;
          this.scanActive=true;
        }
          this.canvasElement.height = this.videoElement.videoHeight;
          this.canvasElement.width = this.videoElement.videoWidth;
          
          this.canvasContext.drawImage(
            this.videoElement, 
              0,
              0,
             this.canvasElement.width,
             this.canvasElement.height
             );

          const imageData=this.canvasContext.getImageData(
             0,
             0,
            this.canvasElement.width,
            this.canvasElement.height
              );

          const code = jsQR(imageData.data, imageData.width, imageData.height, {
            inversionAttempts:'dontInvert'
          });
          if(code){
            this.scanActive=false;
            this.qrData=code.data;
            await this.CountScanner();
            //  this.showQrToast();
          } else{
            if(this.scanActive){
              requestAnimationFrame(this.scan.bind(this));
            }

            }

          } else{
          requestAnimationFrame(this.scan.bind(this));

        }
     }


  reset(){
    this.scanResult= null;
  }

  stopScan(){
    this.scanActive= false;
    
  }


  // async showQrToast(){
  //   const toast=await this.toastCtrl.create({
  //     //message:'Open the QR code',
  //     position:'top',
  //     buttons:[
  //       {
  //         side: 'start',
  //         icon:'open-outline',
  //         text:'Open the QR code and count',
          
  //         handler:()=>{
  //           window.open(this.scanResult,'_system','location=yes'),
  //           this.CountScanner();
  //         }
  //       }
  //     ]
  //   });
  //   toast.present();
  // }

  //tryin to make counter code:

  async CountScanner(){
    try {
      var details: InvitationDetails=new InvitationDetails();
      var decryptedText ;
      await this.encryptionService.Decrypt(''+this.qrData).then(async (result) =>{
        decryptedText = result;
        await this.invitationService.getInvitationQRCode(result).then(result =>{
          details = result;
          this.codeDetails = result;
        });
      });

      if(details == null){
        this.presentToast("Event Not Found. Please make sure you're scanning the correct code",'danger');
      } else if(details.AttendeesCount < details.AttendeesAllowed){
        await this.invitationService.IncrementAttendeesCount(decryptedText).then(result=>{
          this.openMiddleModal();
          // this.presentToast("Updated Attendees",'success')
        });
      }
      else{
        this.presentToast("Sorry you have reached the maximum capacity of attendees",'danger');
      }
    } catch (error) {
      this.presentToast("Error Occured. Please check your internet connection","danger");
    }
  }


  async presentToast(message:string,type:string ) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      color:type,
    });
    toast.present();
  }

  // //******** Middle ***********//
  async openMiddleModal() {
    await this.modalCtrl.create({
      component: ModalContentPage,
      cssClass: 'from-middle-modal',
      swipeToClose: true,
      backdropDismiss:true,
      componentProps: {
        AttendeesAllowed: this.codeDetails.AttendeesAllowed,
        AttendeesCount: this.codeDetails.AttendeesCount
      }
    }).then(modal => {
      modal.present();

      setTimeout(() => {
        modal.dismiss();
    }, 2000);
    });
  }


  ngOnInit() {
  }

}