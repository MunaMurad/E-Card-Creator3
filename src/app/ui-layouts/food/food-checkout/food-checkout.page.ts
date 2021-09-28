import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { UserService } from '../../../services/user.service';
import { FoodService } from '../../../services/food.service';
import { IonicComponentService } from '../../../services/ionic-component.service';
import { Observable } from 'rxjs';

import { FoodAddressAddPage } from '../food-address-add/food-address-add.page';
import { FoodAddressEditPage } from '../food-address-edit/food-address-edit.page';
@Component({
  selector: 'app-food-checkout',
  templateUrl: './food-checkout.page.html',
  styleUrls: ['./food-checkout.page.scss'],
})
export class FoodCheckoutPage implements OnInit {
   //**** User authentication  ****/
   userAuth: boolean = false; // Is user logged in ?
  //**** Address ****/
  public addresses: Observable<any[]>;
  public selectAddressId: string;
  checkedAddress: boolean = false;
  checkedPayment: boolean = false;

  paymentType: string;

  //**** Order ****/
  orderItems = [];
  total = 0;

  //**** Vat,Tax ****/
  vat: number = 10;
  vatTotal: number;

  //**** Delivery fee ****/
  fee: number = 15;
  feeTotal: number;


  valueTotal: number = 0;
  subTotal: any;
  grandTotal: any;




  //public address: Observable<any>;

  public item: Observable<any[]>;
  private userProfileId: any;


  

  itemCart: any;
  orderId: any;


  constructor(
    public userService: UserService,
    public foodService: FoodService,
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    public modalController: ModalController,
    public router: Router,
    private ionicComponentService: IonicComponentService
  ) {

    console.log(this.router.url, "Current URL");


  }








  ngOnInit() {
  }


  
  async ionViewWillEnter() {
    this.userAuth =  await this.userService.isLoggedIn();
    this.getCartProduct()
    this.getAddress()
    // this.totalVat = this.total + ]
  }

  async openAddressModal() {
    console.log("openModal");
    const modal = await this.modalController.create({
      component: FoodAddressAddPage,
      componentProps: {
        //categoryId: categoryId
      }
    });
    return await modal.present();
  }

  async editAddressModal(addressId: string) {
    console.log("openModal");
    const modal = await this.modalController.create({
      component: FoodAddressEditPage,
      componentProps: {
        addressId: addressId
      }
    });
    return await modal.present();
  }
  //**** Address ****///

  getAddress() {
    // use async pipe //
    console.log("______getAddress()");
    this.addresses = this.userService.getAddressByUserId();
    // this.foodService.getPlacesByCatId( this.categoryId ).subscribe(actionArray => {
    //   console.log(actionArray);
    //   this.places = actionArray
    // });
  }
  // selectAddress(index, addressId) {
  //   alert("")
  //   this.selectAddressId = addressId;
  //   this.checkedAddress = true;
 
  // }

  //**** Payment ****///


  // selectPayment(paymentType) {
  //   this.paymentType = paymentType;
  //   this.checkedPayment = true;
  //   console.log("checkedPayment = "+this.checkedPayment);
  // }


  addressGroupChange(event) {
    console.log("addressGroupChange",event.detail);
    //this.selectedRadioGroup = event.detail;
  this.selectAddressId= event.detail.value;
  this.checkedAddress = true;
  console.log("selectAddressId="+this.selectAddressId);
  }

  paymentGroupChange(event) {
    console.log("paymentGroupChange",event.detail);
    //this.selectedRadioGroup = event.detail;
  this.paymentType= event.detail.value;
  this.checkedPayment = true;
  console.log("checkedPayment = "+this.checkedPayment);
  console.log("paymentType="+this.paymentType);
  }







  //**** Items in cart ****/

  getCartProduct() {
    // this.cartProducts = this.productService.getLocalCartProducts();


    const items = this.foodService.getCart();
    console.log("page not refresh__________________food-cart : items=" + items);
    const selected = {};

    this.valueTotal = 0;

    for (const obj of items) {

      this.valueTotal += obj.price;

    }

    // all item in shopping cart
    this.orderItems = items;
    console.log("..............Order items =" + JSON.stringify(this.orderItems));



    this.total = this.valueTotal;




    this.subTotal = Number(this.total.toFixed(2));


    this.vatTotal = Number(
      (this.subTotal * this.vat / 100).toFixed(2)
    );
    this.feeTotal = Number((this.fee + this.vatTotal).toFixed(2));

    this.grandTotal = Number((this.subTotal + this.feeTotal).toFixed(2));



  }



  //**** Place order ****/

  placeOrder() {
    if (this.checkedAddress) {
      console.log("selectAddressId = "+this.selectAddressId);
      if (this.checkedPayment ) {
        this.addOrder();
      } else {
        this.ionicComponentService.presentAlert("Please choose payment method");
      }
    } else {
      this.ionicComponentService.presentAlert("Please choose address");
    }


  }
  async addOrder() {
    // console.log("userProfileId="+this.userService.getUserId());
    console.log("_____call addAddress");



    this.ionicComponentService.presentLoading();
    this.foodService.placeOrder(this.selectAddressId, this.paymentType, this.orderItems, this.grandTotal)
      .then(
        () => {
          //this.router.navigateByUrl('/home');
          console.log("New item added.")
          this.ionicComponentService.dismissLoading();
          this.router.navigateByUrl('/food-finish');
          //this.navController.goForward(`/person/${this.catId}?something=${encodeURI(somethingValue)}`);
          //this.navController.goForward('/crud-item/${this.catId}');
          //this.navController.navigateForward('/crud-item');
        },
        error => {
          console.log(error);
          this.ionicComponentService.presentToast(error, 3000);
          this.ionicComponentService.dismissLoading();
        }
      );

  }





  // radioFocus() {
  //   console.log("radioFocus");
  // }
  // radioSelect(event) {
  //   console.log("radioSelect",event.detail);
  //   this.selectedRadioItem = event.detail;
  // }
  // radioBlur() {
  //   console.log("radioBlur");
  // }
}
