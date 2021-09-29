import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingDetailPageRoutingModule } from './shopping-detail-routing.module';

import { ShoppingDetailPage } from './shopping-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingDetailPageRoutingModule
  ],
  declarations: [ShoppingDetailPage]
})
export class ShoppingDetailPageModule {}
