import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingFinishPageRoutingModule } from './shopping-finish-routing.module';

import { ShoppingFinishPage } from './shopping-finish.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingFinishPageRoutingModule
  ],
  declarations: [ShoppingFinishPage]
})
export class ShoppingFinishPageModule {}
