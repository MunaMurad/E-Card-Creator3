import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { ModalController,NavController} from '@ionic/angular';

import { UserService } from '../../../services/user.service';
import { FoodService } from '../../../services/food.service';

import { Observable } from 'rxjs';


@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.page.html',
  styleUrls: ['./food-detail.page.scss'],
})
export class FoodDetailPage implements OnInit {

  parentPath:any;


  //**** toolbar for hide and show ****/
  showToolbar = false;
  showColor = false;
  showTitle = false;
  transition:boolean = false;
    


  item: Observable<any>;
  itemArray: any=[];
  itemOptions: any=[];
  itemSubscribe: any;
  // relatedPlacesArray: any=[];
  // reviews: Observable<any[]>;
  itemId: any;
  categoryId: any;
  showAttribute1: boolean;
  showAttribute2: boolean;

  //**** Size and Addon  ****//
  selectSize: string;  
  addOnItem:any;
  
   // ******** for Cart ***********//
   cart = [];

  //**** User authentication  ****//
  
  userAuth: boolean = false; // Is user logged in ?
  userId: any;

  public dummy = [
    { val: 'Pepperoni', isChecked: true },
    { val: 'Sausage', isChecked: false },
    { val: 'Mushroom', isChecked: false }
  ];
  constructor(
      public foodService: FoodService,
      public userService: UserService,
      private activatedRoute: ActivatedRoute,
      private navController: NavController,
      public router: Router,
      private modalController: ModalController
  ) 
  { 
    this.itemId = this.activatedRoute.snapshot.paramMap.get('itemId');
    
    console.log("itemId="+ this.itemId);
    //console.log(this.router.url,"Current URL");
    this.cart = this.foodService.getCart();
  }
      

 async ngOnInit() {
    this.item =  await this.foodService.getItemDetail( this.itemId);
    this.itemSubscribe = this.item.subscribe(res => {
      this.itemArray = res;
    });
 
  }
  ngOnDestroy() {
		this.itemSubscribe.unsubscribe()
  }

  // multiple select
  getAddOnValue() {
    console.log("call getAddOnValue()");
    this.addOnItem =  this.itemArray.attribute2_value.filter(value => {
      return value.isChecked;
    });
    console.log(this.addOnItem);
    this.addOnItem =  this.itemArray.attribute2_value.filter(value => {
      return value.isChecked;
    });
    console.log("this addOn="+this.addOnItem)
    console.log("select size="+ this.selectSize);
  }

  addToCart() {
    this.addOnItem =  this.itemArray.attribute2_value.filter(value => {
      return value.isChecked;
    });
    const addItem = {
      //id :this.itemId, 
      itemId:this.itemId,
      name: this.itemArray.name,
      price: this.itemArray.price,
      description: this.itemArray.description,
      addOn: this.addOnItem,
      size: this.selectSize,
      image: this.itemArray.image
      //image: this.image
      }

      // console.log(this.addOnItem);
      // console.log("select SIZE="+ this.selectSize);
    this.foodService.addToCart(addItem);
    console.log("______addItem="+ JSON.stringify(addItem) );
    this.router.navigateByUrl('/food-cart');
  }


  onScroll($event: CustomEvent) {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.transition = true;
      this.showToolbar = scrollTop >= 50;
      //console.log("showToolbar="+this.showToolbar);
      this.showTitle = scrollTop >= 50;
      //console.log("showTitle="+this.showTitle);
    }else{
      this.transition = false;
    }
  }

}
