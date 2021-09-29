import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingCheckoutPageRoutingModule } from './shopping-checkout-routing.module';

import { ShoppingCheckoutPage } from './shopping-checkout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingCheckoutPageRoutingModule
  ],
  declarations: [ShoppingCheckoutPage]
})
export class ShoppingCheckoutPageModule {}
