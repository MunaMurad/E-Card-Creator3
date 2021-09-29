
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavParams, ModalController ,IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-travel-image-view',
  templateUrl: './travel-image-view.page.html',
  styleUrls: ['./travel-image-view.page.scss'],
})
export class TravelImageViewPage implements OnInit {

  // change to angular8 
 // @ViewChild('slider', { read: ElementRef })slider: ElementRef;
 
 //@ViewChild('slider', { static: false }) slider: ElementRef;
 @ViewChild('slider', { static: true }) slider: IonSlides;
 imgArray: any=[]; 

  //this.img = this.navParams.get('img');
  sliderOpts: any;

 
  constructor(
    private navParams: NavParams, 
    private modalController: ModalController) {

      this.imgArray = this.navParams.get('data');
      
      console.log("_____get index="+this.navParams.get('index'));
      console.log("get data="+this.imgArray);
      console.log("_________this.img  = "+JSON.stringify(this.imgArray)); 
      
      
      this.sliderOpts = {
        initialSlide:this.navParams.get('index'), // index image
        slidesPerView: 'auto',
        grabCursor: true,
        spaceBetween: 10,
        zoom: {
          maxRatio: 5
        }
      };
   }
 
  ngOnInit() {
  }
  ngAfterViewChecked(): void {
    this.slider.update(); // This will update slide after view checked
   }
 
  close() {
    this.modalController.dismiss();
  }


}
