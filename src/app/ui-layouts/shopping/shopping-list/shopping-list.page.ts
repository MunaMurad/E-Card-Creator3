import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { NavController,ModalController} from '@ionic/angular';

import { ShoppingService } from '../../../services/shopping.service';
import { Observable, Subscription } from 'rxjs';
import { ShoppingSearchPage } from '../shopping-search/shopping-search.page';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.page.html',
  styleUrls: ['./shopping-list.page.scss'],
})
export class ShoppingListPage implements OnInit {


  public categoryId: any;
  public items: Observable<any[]>;

   // ******** for Cart ***********//
   cart = [];

  constructor( 
    public shoppingService: ShoppingService,
    private activatedRoute: ActivatedRoute,
    public modalController: ModalController,
    private navController: NavController,
    public router: Router,
  )
    { 
      this.categoryId = this.activatedRoute.snapshot.paramMap.get('categoryId');
      this.cart = this.shoppingService.getCart();
    }

  ngOnInit() {
    this.items = this.shoppingService.getItemByCatId(this.categoryId);
  }

  openTest(categoryId){
    console.log("openTest"+ categoryId);
  }
  openDetail(url,itemId){
    this.router.navigateByUrl('/'+url+'/'+itemId);
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


}
