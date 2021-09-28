import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { NavController} from '@ionic/angular';

import { FoodService } from '../../../services/food.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-food-category',
  templateUrl: './food-category.page.html',
  styleUrls: ['./food-category.page.scss'],
})
export class FoodCategoryPage implements OnInit {

   
  viewType: string = "1col";
  //********* Observable *********/
  categories: Observable<any[]>;
  // ******** for Cart ***********//
  cart = [];
 
  constructor(
    public foodService: FoodService,
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    public router: Router
  ) { 
    this.cart = this.foodService.getCart();
  }

  ngOnInit() {
    // this.parentPath= this.router.url;
    // console.log("....Current route path"+this.parentPath);

    this.categories = this.foodService.getCategories();
  }

  changeView(viewType){
    this.viewType = viewType;
  }

}
