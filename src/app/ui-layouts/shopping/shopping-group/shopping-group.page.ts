import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { NavController} from '@ionic/angular';

import { ShoppingService } from '../../../services/shopping.service';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-shopping-group',
  templateUrl: './shopping-group.page.html',
  styleUrls: ['./shopping-group.page.scss'],
})
export class ShoppingGroupPage implements OnInit {

  public groupId: any;
  public items: Observable<any[]>;
  public group: Observable<any>;
   // ******** for Cart ***********//
   cart = [];
  constructor( 
    public shoppingService: ShoppingService,
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    public router: Router,
  )
    { 
      this.groupId = this.activatedRoute.snapshot.paramMap.get('groupId');
      this.cart = this.shoppingService.getCart();
    }

  ngOnInit() {
    this.items = this.shoppingService.getItemByGroupId(this.groupId);
    this.group = this.shoppingService.getGroupDetail(this.groupId);
  }
  openDetail(url,itemId){
    this.router.navigateByUrl('/'+url+'/'+itemId);
  }
}
