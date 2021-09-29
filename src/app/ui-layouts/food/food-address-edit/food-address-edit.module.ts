import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodAddressEditPageRoutingModule } from './food-address-edit-routing.module';

import { FoodAddressEditPage } from './food-address-edit.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    FoodAddressEditPageRoutingModule
  ],
  declarations: [FoodAddressEditPage]
})
export class FoodAddressEditPageModule {}
