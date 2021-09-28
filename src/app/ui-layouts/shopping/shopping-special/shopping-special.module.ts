import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingSpecialPageRoutingModule } from './shopping-special-routing.module';

import { ShoppingSpecialPage } from './shopping-special.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingSpecialPageRoutingModule
  ],
  declarations: [ShoppingSpecialPage]
})
export class ShoppingSpecialPageModule {}
