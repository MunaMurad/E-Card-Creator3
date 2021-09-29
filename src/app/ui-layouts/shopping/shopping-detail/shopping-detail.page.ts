import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { ModalController,NavController, ToastController} from '@ionic/angular';

import { AngularFireAuth } from '@angular/fire/auth';

import { ShoppingService } from '../../../services/shopping.service';
import { IonicComponentService} from '../../../services/ionic-component.service';

// import { ShoppingImageGalleryPage } from '../shopping-image-gallery/shopping-image-gallery.page'; // import shopping image gallery component page
// import { ShoppingReviewAddPage } from '../shopping-review-add/shopping-review-add.page';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-detail',
  templateUrl: './shopping-detail.page.html',
  styleUrls: ['./shopping-detail.page.scss'],
})
export class ShoppingDetailPage implements OnInit {


  parentPath:any;

  //****** image slide  *******/
  sliderOpts = {
    zoom: false,
    slidesPerView: 1.5,
    spaceBetween: 20,
    centeredSlides: true,
  };

  //**** toolbar for hide and show ****/
  showToolbar = false;
  showColor= false;
  showTitle = false;
  transition:boolean = false;
    

  item: Observable<any>;
  itemArray: any=[]; 

  itemRelated: Observable<any>;

  itemOptions: any=[];
  itemSubscribe: any;
 

  itemId: any;
  categoryId: any;


  //**** Size and Color  ****//
  showAttribute1: boolean; // size
  showAttribute2: boolean; // color
  selectedColor: any;
  selectedColorName: any;
  selectedSize: any;

   // ******** for Cart ***********//
   cart = [];


 //relatedPlaces:Observable<any[]>;
  //relatedPlacesArray: any=[];
  reviews: Observable<any[]>;

  //**** User authentication  ****/
  userAuth: boolean = false; // Is user logged in ?
  userId: any;


  //**** favorite  ****/
  favorite: boolean = false;
  favArray: any;
  fav
	heartType: string = "heart-empty";


  //Configuration for each Slider
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true
  };

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
    this.itemId = this.activatedRoute.snapshot.paramMap.get('itemId');
    this.cart = this.shoppingService.getCart();
    //console.log("categoryId="+ this.placeId);
    //console.log(this.router.url,"Current URL");
  }
      

 async ngOnInit() {
    await this.getItemDetail();
  }


   // ******** get selected color ***********//
  onSelectColor(color: any,colorName: any): void {
    this.selectedColor = color;
    this.selectedColorName = colorName;
    console.log("color selected="+ JSON.stringify(this.selectedColor))
  }
    // ******** get selected size ***********//
  onSelectSize(size: any): void {
    this.selectedSize = size;
    console.log("size selected="+ JSON.stringify(this.selectedSize))
  }


  async getItemDetail(){

    this.item =  await this.shoppingService.getItemById( this.itemId);
     this.itemSubscribe =  this.item.subscribe(res => {
        this.itemArray = res;
        this.itemRelated = this.shoppingService.getRelatedItem(this.itemArray.shopping_categoryId , 5);
        //********* shopping-item/favorite/userId  ***********//
        this.heartType = res.favorite.includes(this.userId) ? 'heart' : 'heart-empty'
    });


  }

  ngOnDestroy() {
		this.itemSubscribe.unsubscribe()
  }

  
	toggleHeart() {
    console.log("calling toggleHeart");
		if(this.heartType == 'heart-empty') {
      console.log("Heart ON");
      
      this.shoppingService.addWishlist(
        this.itemId,
        this.itemArray.name, 
        this.itemArray.rating, 
        this.itemArray.image
      );
			// this.postReference.update({
			// 	likes: firestore.FieldValue.arrayUnion(this.user.getUID())
			// })
		} else {
      console.log("Heart OFF");
      this.shoppingService.removeWishlist(this.itemId);
			// this.postReference.update({
			// 	likes: firestore.FieldValue.arrayRemove(this.user.getUID())
			// })
		}
	}
  addToCart() {
    console.log("call addToCart");
    const addItem = {
      //id :this.itemId, 
      itemId:this.itemId,
      name: this.itemArray.name,
      price: this.itemArray.price,
      description: this.itemArray.description,
      color: this.selectedColorName,
      size: this.selectedSize,
      image: this.itemArray.image
      //image: this.image
      }
      // console.log(this.addOnItem);
      // console.log("select SIZE="+ this.selectSize);
    this.shoppingService.addToCart(addItem);
    console.log("______addItem="+ JSON.stringify(addItem) );
    this.router.navigateByUrl('/shopping-cart');
  }


  onScroll($event: CustomEvent) {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.transition = true;
      this.showToolbar = scrollTop >= 20;
      //console.log("showToolbar="+this.showToolbar);
      this.showTitle = scrollTop >= 20;
      //console.log("showTitle="+this.showTitle);
    }else{
      this.transition = false;
    }
  }


}
