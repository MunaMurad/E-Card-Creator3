import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { MenuController,ModalController,NavController} from '@ionic/angular';
import { ShoppingService} from '../../../services/shopping.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-category',
  templateUrl: './shopping-category.page.html',
  styleUrls: ['./shopping-category.page.scss'],
})
export class ShoppingCategoryPage implements OnInit {

  categories: Observable<any[]>;
     // ******** for Cart ***********//
     cart = [];
  constructor( 
    public shoppingService: ShoppingService,
    private menu: MenuController,
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    public router: Router
  ) { 
    this.cart = this.shoppingService.getCart();
    }
  ngOnInit() {
    this.categories = this.shoppingService.getCategories();
  }

}
