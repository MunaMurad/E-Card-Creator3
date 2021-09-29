import { Component, OnInit ,ViewChild} from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { IonTabs,ModalController,AlertController,NavController, LoadingController} from '@ionic/angular';
import { RadioService } from '../../../services/radio.service';
import { IonicComponentService } from '../../../services/ionic-component.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-radio-player',
  templateUrl: './radio-player.page.html',
  styleUrls: ['./radio-player.page.scss'],
})
@Component({
  selector: 'app-radio-player',
  templateUrl: './radio-player.page.html',
  styleUrls: ['./radio-player.page.scss'],
})
export class RadioPlayerPage implements OnInit {

  player:any;
  playing: boolean = false;


  public radioId: any;


  radioDetail: Observable<any>;
  stationTitle: string;
  stationFq: string;
  stationUrl: any;


  loadingPopup: any;

  constructor(
    public radioService: RadioService,
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    private modalController: ModalController,
    public router: Router,
    public alertController: AlertController,
    private ionicComponentService: IonicComponentService
  ) {
    this.radioId = this.activatedRoute.snapshot.paramMap.get('radioId');



        // this.radio = afDB.object('/radio/'+this.radioId ).valueChanges();
        // this.radio.subscribe( (snapshots) => {
        //   this.stationUrl = snapshots.url;    
        //   console.log("station url ="+this.stationUrl )
        //   this.player = myplayer;
        //   this.play(this.stationUrl);
        // });

   }

  ngOnInit() {
    console.log("radioId="+this.radioId)
    // radio station list : http://www.radiosure.com/stations/
    this.radioDetail = this.radioService.getStationDetail(this.radioId);
    this.radioService.getStationDetail(this.radioId).subscribe(res => {
      console.log("stationTitle ="+this.stationTitle )
      console.log("stationFq="+this.stationFq )
      console.log("stationUrl ="+this.stationUrl )
      this.stationTitle = res.title;
      this.stationFq = res.fq;
      this.stationUrl = res.url;    
      console.log("stationTitle ="+this.stationTitle )
      console.log("stationFq="+this.stationFq )
      console.log("stationUrl ="+this.stationUrl )

      // call play()
      this.play(this.stationUrl);
    });

  }

  async ionViewWillEnter() {
 

  }

  ionViewDidLeave(){
    this.stop();
   }
 



 
  // async presentLoading() {
  //   this.isLoading = true;
  //   return await this.loadingController.create({
  //     duration: 5000,
  //   }).then(a => {
  //     a.present().then(() => {
  //       console.log('presented');
  //       if (!this.isLoading) {
  //         a.dismiss().then(() => console.log('abort presenting'));
  //       }
  //     });
  //   });
  // }

  // async dismissLoading() {
  //   this.isLoading = false;
  //   return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  // }


   async play(url) {
    // const loading = await this.loadingController.create({
    //   spinner: "dots",
    //   duration: 5000,
    //   message: 'Please wait...',
    //   translucent: true,
    //   cssClass: 'custom-class custom-loading'
    // });
    //  await loading.present();
    this.ionicComponentService.presentLoading();
     console.log("play button clicked");
     console.log("radio station url="+url);
     //await  loading.onDidDismiss();
     this.playing = !this.playing;
     this.radioService.play(url).then(() => {
       console.log('Return Playing');
       this.ionicComponentService.dismissLoading();
       ///this.loadingPopup.dismiss();  
     })
     .catch(error => {
       console.log("error="+error); 
       this.ionicComponentService.presentAlert("Error msg= "+error+"<br>Radio url = "+url);
       this.radioService.stop();
       this.playing = false;
       this.ionicComponentService.dismissLoading();
     });
 




   }
 
   pause() {
     this.playing = !this.playing;
     this.radioService.pause();
   }
 
   stop() {
     this.radioService.stop();
   }
 
   async close(){
    await this.modalController.dismiss();
  }

 
 
}
