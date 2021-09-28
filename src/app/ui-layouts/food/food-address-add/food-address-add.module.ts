import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FoodAddressAddPageRoutingModule } from './food-address-add-routing.module';

import { FoodAddressAddPage } from './food-address-add.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    FoodAddressAddPageRoutingModule
  ],
  declarations: [FoodAddressAddPage]
})
export class FoodAddressAddPageModule {}
