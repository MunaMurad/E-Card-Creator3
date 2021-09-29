import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { ModalController,NavController, ToastController} from '@ionic/angular';
import { ShoppingService } from '../../../services/shopping.service';
import { IonicComponentService} from '../../../services/ionic-component.service';

// import { ShoppingImageGalleryPage } from '../shopping-image-gallery/shopping-image-gallery.page'; // import shopping image gallery component page
// import { ShoppingReviewAddPage } from '../shopping-review-add/shopping-review-add.page';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-special',
  templateUrl: './shopping-special.page.html',
  styleUrls: ['./shopping-special.page.scss'],
})
export class ShoppingSpecialPage implements OnInit {


  specialDetail: Observable<any>;
  itemArray: any=[]; 
  specialId: any;



  constructor(
      public shoppingService: ShoppingService,
      private activatedRoute: ActivatedRoute,
      private navController: NavController,
      public toastController: ToastController,
      public router: Router,
      private ionicComponentService: IonicComponentService,
      private modalController: ModalController
  ) 
  { 
    this.specialId = this.activatedRoute.snapshot.paramMap.get('specialId');

  }
      

 async ngOnInit() {
    await this.getSpecialDetail();
  }

  async getSpecialDetail(){
    console.log("getSpectailDetail");
    this.specialDetail =  await this.shoppingService.getSpecialDetail( this.specialId);
    //  this.itemSubscribe =  this.item.subscribe(res => {
    //     this.itemArray = res;
    //     this.itemRelated = this.shoppingService.getRelatedItem(this.itemArray.shopping_categoryId , 5);
    //     //********* shopping-item/favorite/userId  ***********//
    //     this.heartType = res.favorite.includes(this.userId) ? 'heart' : 'heart-empty'
    //});


  }

  async close(){
    await this.modalController.dismiss();
  }


  

}
