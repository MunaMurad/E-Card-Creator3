import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController, ModalController, NavController } from '@ionic/angular';
import { UserService } from '../../../services/user.service';
import { ShoppingService } from '../../../services/shopping.service';
import { Observable, Subscription } from 'rxjs';

import { ShoppingSearchPage } from '../shopping-search/shopping-search.page';
import { ShoppingSpecialPage } from '../shopping-special/shopping-special.page';
import { IonicComponentService } from '../../../services/ionic-component.service';
import { ShoppingSpecialPageModule } from '../shopping-special/shopping-special.module';
//import { HideHeaderConfig } from '../../shared/hide-header.directive';


@Component({
  selector: 'app-shopping-home',
  templateUrl: './shopping-home.page.html',
  styleUrls: ['./shopping-home.page.scss'],
})
export class ShoppingHomePage implements OnInit {


  //Slider configuration 
  slideOptsOne = {
    initialSlide: 0,
    //slidesPerView: 1,
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    autoplay: true,

  };

  slideOption = {
    slidesPerView: 'auto',
    grabCursor: true
  };
  
  // ******** for Cart ***********//
  cart = [];

  //********* Observable *********/

  groups: Observable<any[]>;
  categories: Observable<any[]>;
  promotions: Observable<any[]>;
  recommended: Observable<any[]>;
  banners: Observable<any[]>;

  constructor(
    public shoppingService: ShoppingService,
    public menuCtrl: MenuController,
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    public router: Router,
    private ionicComponentService: IonicComponentService,
    private modalController: ModalController
  ) {
    this.cart = this.shoppingService.getCart();
  }


  ngOnInit() {
    this.groups = this.shoppingService.getGroups();
    this.categories = this.shoppingService.getCategories();
    this.promotions = this.shoppingService.getPromotionItems();
    this.recommended = this.shoppingService.getRecommended();
    this.banners = this.shoppingService.getBanners();
  }
  toggleSideMenu() {
    this.menuCtrl.toggle(); //Add this method to your button click function
  }
  async openSearchModal() {
    console.log("openModal");
    const modal = await this.modalController.create({
      component: ShoppingSearchPage,
      componentProps: {
        //categoryId: categoryId
      }
    });
    return await modal.present();
  }
  async openSpecialModal(specialId) {
    console.log("openModal");
    const modal = await this.modalController.create({
      component: ShoppingSpecialPage,
      componentProps: {
        specialId: specialId
      }
    });
    return await modal.present();
  }
  openDetail(url, itemId) {
    this.router.navigateByUrl('/' + url + '/' + itemId);
  }

}
