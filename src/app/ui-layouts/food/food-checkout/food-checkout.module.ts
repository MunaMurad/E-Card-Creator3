import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodCheckoutPageRoutingModule } from './food-checkout-routing.module';

import { FoodCheckoutPage } from './food-checkout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodCheckoutPageRoutingModule
  ],
  declarations: [FoodCheckoutPage]
})
export class FoodCheckoutPageModule {}
