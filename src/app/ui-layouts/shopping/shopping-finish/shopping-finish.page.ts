import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { NavController} from '@ionic/angular';

import { UserService } from '../../../services/user.service';
import { ShoppingService } from '../../../services/shopping.service';
@Component({
  selector: 'app-shopping-finish',
  templateUrl: './shopping-finish.page.html',
  styleUrls: ['./shopping-finish.page.scss'],
})
export class ShoppingFinishPage implements OnInit {



  constructor(    

    public shoppingService: ShoppingService,
    public userService: UserService,
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    public router: Router,
) {
    this.shoppingService.removeAllItemCart();
   }

  ngOnInit() {
  }

}