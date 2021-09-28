import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { NavController,AlertController} from '@ionic/angular';

import { UserService } from '../../../services/user.service';
import { ShoppingService } from '../../../services/shopping.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.page.html',
  styleUrls: ['./shopping-cart.page.scss'],
})
export class ShoppingCartPage implements OnInit {
  selectedItems = [];
  total = 0;
  totalVat: number;
  totalValue: number = 0;

  //**** User authentication  ****/
  userAuth: boolean = false; // Is user logged in ?
  userId: any;
  constructor(

      public shoppingService: ShoppingService,
      public userService: UserService,
      private activatedRoute: ActivatedRoute,
      private navController: NavController,
      public router: Router,
      public alertController: AlertController
  ) {

   }

  ngOnInit() {

  }
  async ionViewWillEnter() {
    //this.userAuth =  await this.userService.getAuthState();
    this.userAuth =  await this.userService.isLoggedIn();
    this.userId = await this.userService.getUserId();
    this.getCartProduct() 
    console.log("___this.userAuth="+this.userAuth);
    console.log("___this.userId="+this.userId);
   // this.totalVat = this.total + ]
  }



removeCartProduct(index , slidingItem) {
  //this.productService.removeLocalCartProduct(product);
  slidingItem.close();
  console.log("removeCart")
  this.shoppingService. removeItemCart(index);
  // Recalling
  this.getCartProduct();
}

getCartProduct() {
 // this.cartProducts = this.productService.getLocalCartProducts();
  const items = this.shoppingService.getCart();
  console.log("page not refresh__________________food-cart : items="+items);
  const selected = {};
  this.totalValue = 0;

  for (const obj of items) {
    this.totalValue += obj.price;
  }
  this.selectedItems = items;
  console.log("selected Addon="+this.selectedItems);
  this.total =this.totalValue;

}

getCartSameProduct() {
  // this.cartProducts = this.productService.getLocalCartProducts();

   const items = this.shoppingService.getCart();
   //console.log("page not refresh__________________shopping-cart : items="+items);
   const selected = {};

   for (const obj of items) {
     if (selected[obj.itemId]) {
       selected[obj.itemId].count++;
     } else {
       selected[obj.itemId] = {...obj, count: 1};
     }
   }

   this.selectedItems = Object.keys(selected).map(key => selected[key])
   console.log("selected Addon="+this.selectedItems);
   this.total = this.selectedItems.reduce((a, b) => a + (b.count * b.price), 0);
 
 }


  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'No permission',
      message: 'You have to signin first!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Login',
          handler: () => {
            console.log('Go to login page');
            this.router.navigateByUrl('/fire-signin?redirectUrl=shopping-checkout');
          }
        }
      ]
    });

    await alert.present();
  }

  // checkout
  checkout(){
    //navigate to address page
    // check if user already logged in?
    if(!this.userAuth){
      // error: not login 
      // show popup
      console.log("checkout()___userAuth = false");
      this.presentAlertConfirm();
    }else{
      // userAuth = true 
      console.log("checkout()___userAuth = true");
      this.router.navigateByUrl('/shopping-checkout');
    }
    //
  }

}
