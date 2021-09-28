import { Component, OnInit } from '@angular/core';
import { ModalController,IonRouterOutlet } from '@ionic/angular';
import { ModalContentPage } from '../modal-content/modal-content.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {


  constructor(private modalController: ModalController,private routerOutlet: IonRouterOutlet) {}

  ngOnInit() { }

  async settings() {
    const modal = await this.modalController.create({
      component: ModalContentPage, // Component page
      componentProps: { website: 'edupala.com' },
      cssClass: 'setting-modal',
      backdropDismiss: false,
    });

    modal.present();
   // this.dataFromModal = await modal.onWillDismiss();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalContentPage
    });
    return await modal.present();
  }

  
  async openSwipeableModal() {
    const modal = await this.modalController.create({
      component: ModalContentPage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });
    return await modal.present();
  }






  //******** bottom ***********//
  openBottomModal() {
    this.modalController.create({
      component: ModalContentPage,
      cssClass: 'from-bottom-modal',
      componentProps: {
        // data: this.placeArray,
        // index: image
      }
    }).then(modal => {
      modal.present();
    });
  }

//******** Top ***********//
  openTopModal() {
    this.modalController.create({
      component: ModalContentPage,
      cssClass: 'from-top-modal',
      componentProps: {
        // data: this.placeArray,
        // index: image
      }
    }).then(modal => {
      modal.present();
    });
  }

  //******** Middle ***********//
  openMiddleModal() {
    this.modalController.create({
      component: ModalContentPage,
      cssClass: 'from-middle-modal',
      componentProps: {
        // data: this.placeArray,
        // index: image
      }
    }).then(modal => {
      modal.present();
    });
  }

  //******** Full ***********//
  openFullModal() {
    this.modalController.create({
      component: ModalContentPage,
      componentProps: {
        // data: this.placeArray,
        // index: image
      }
    }).then(modal => {
      modal.present();
    });
  }
// passing data

// swipeable modal

}
