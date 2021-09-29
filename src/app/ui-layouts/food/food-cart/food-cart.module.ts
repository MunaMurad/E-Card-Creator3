import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodCartPageRoutingModule } from './food-cart-routing.module';

import { FoodCartPage } from './food-cart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodCartPageRoutingModule
  ],
  declarations: [FoodCartPage]
})
export class FoodCartPageModule {}
