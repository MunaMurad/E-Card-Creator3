import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController,NavController, LoadingController, ToastController} from '@ionic/angular';
import { AngularFirestore} from '@angular/fire/firestore';

import { Observable } from 'rxjs';

//*********** Import  gallery viewer modal **************//
import { ImageGalleryViewPage } from '../image-gallery-view/image-gallery-view.page';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.page.html',
  styleUrls: ['./image-gallery.page.scss'],
})
export class ImageGalleryPage implements OnInit {
  public images: Observable<any[]>;
  public imagesArray: any=[];
   //*********** View mode  **************/
   galleryView: string = "two";



   constructor(
    private firestore: AngularFirestore,
    public menuCtrl: MenuController,
    private loadingController: LoadingController ,
    private modalController: ModalController,
    public loadingPopup: LoadingController
  ) {
 }


 ngOnInit() {
  this.images = this.firestore.collection<any>('layout_gallery').valueChanges();
  this.images.subscribe(res => {
    this.imagesArray = res;
    console.log("imageArray="+JSON.stringify(this.imagesArray));
    setTimeout(() => {
     // loadingPopup.dismiss();
    }, 1000);
})
}

toggleSideMenu() {
  this.menuCtrl.toggle(); //Add this method to your button click function
}
openImageViewer(image) {
  console.log("openImageViewer")
  // let modal = this.modalCtrl.create(CartPage, { data: this.cart });
 this.modalController.create({
   component: ImageGalleryViewPage,
   cssClass: 'fullscreen-modal',
   componentProps: {
     data: this.imagesArray,
     index: image
   }
 }).then(modal => {
   modal.present();
 });
}

}
