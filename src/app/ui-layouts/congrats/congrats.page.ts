import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController,NavController, LoadingController, ToastController} from '@ionic/angular';
import { AngularFirestore} from '@angular/fire/firestore';
// Send Parameter
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

//*********** Import  gallery viewer modal **************//
import { ImageGalleryViewPage } from '../image-gallery-view/image-gallery-view.page';

@Component({
  selector: 'app-congrats',
  templateUrl:'./congrats.page.html',
  styleUrls: ['./congrats.page.scss'],
})
export class CongratsPage implements OnInit {
  [x: string]: any;

  public images: Observable<any[]>;
  public imagesArray: any=[];
   //*********** View mode  **************/
   galleryView: string = "two";



   constructor(
    private router: Router,
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
filterItems(searchTerm: string) {
  return this.items.filter((item: { title: string; }) => {
    return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
  });
}


editImage(imageSrc){
  this.router.navigate(['/image-editor', {imageSrc: imageSrc}]);
}

}
