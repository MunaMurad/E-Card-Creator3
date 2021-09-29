import { Component, OnInit ,ViewChild} from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { IonTabs,ModalController,NavController} from '@ionic/angular';

import { FoodService } from '../../../services/food.service';
import { Observable, Subscription } from 'rxjs';
import { FoodSearchPage } from '../food-search/food-search.page';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.page.html',
  styleUrls: ['./food-list.page.scss'],
})
export class FoodListPage implements OnInit {


  public categoryId: any;
  public items: Observable<any[]>;

    // ******** for Cart ***********//
    cart = [];

  constructor( 
    public foodService: FoodService,
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    public modalController: ModalController,
    public router: Router
  )
    { 
      this.categoryId = this.activatedRoute.snapshot.paramMap.get('categoryId');
      //console.log("Get activatedRoute categoryId="+ this.activatedRoute.snapshot.paramMap.get('categoryId'));
      //console.log(this.router.url,"Current URL");
      this.cart = this.foodService.getCart();
    }

  ngOnInit() {
    //this.getPlace();
    this.items = this.foodService.getItemByCatId(this.categoryId);
  }
  async openSearchModal() {
    console.log("openModal");
    const modal = await this.modalController.create({
      component: FoodSearchPage,
      componentProps: {
        //categoryId: categoryId
      }
    });
    return await modal.present();
  }

}
