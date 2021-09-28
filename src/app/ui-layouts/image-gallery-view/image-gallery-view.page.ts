
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavParams, ModalController ,IonSlides} from '@ionic/angular';
import { IonicComponentService} from '../../services/ionic-component.service';
@Component({
  selector: 'app-image-gallery-view',
  templateUrl: './image-gallery-view.page.html',
  styleUrls: ['./image-gallery-view.page.scss'],
})
export class ImageGalleryViewPage implements OnInit {

  // ion-slides not working properly when opening second time.
  // https://github.com/ionic-team/ionic-framework/issues/17522

  // change to angular8 
  //@ViewChild('slider', { read: ElementRef })slider: ElementRef;
  @ViewChild('slider', { static: true }) slider: IonSlides;

  imgArray: any=[]; 
  slidesDelay: boolean = false;
   //this.img = this.navParams.get('img');
   sliderOpts: any;
  
   constructor(
     private navParams: NavParams, 
     private modalController: ModalController,
     private ionicComponentService: IonicComponentService
     ) {

    
       // Can't swipe when open
       this.sliderOpts = {
         initialSlide:this.navParams.get('index'), // index image
         //effect:	'cube',
         slidesPerView: 'auto',
         grabCursor: true,
         spaceBetween: 10,
         zoom: {
           maxRatio: 5
         }
       };
       this.imgArray = this.navParams.get('data');
       console.log("_____get index="+this.navParams.get('index'));
       console.log("get data="+this.imgArray);
       console.log("_________this.img  = "+JSON.stringify(this.imgArray)); 

    }
  
    ngOnInit() {
      //this.ionicComponentService.presentLoading(); 
      // setTimeout(() => {
      //   this.slidesDelay = true;
      //  }, 1000);
    }
    ngAfterViewChecked(): void {
     this.slider.update(); // This will update slide after view checked
    }
 
  
   close() {
     this.modalController.dismiss();
   }
 
 
 }
 