import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingAddressAddPageRoutingModule } from './shopping-address-add-routing.module';

import { ShoppingAddressAddPage } from './shopping-address-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ShoppingAddressAddPageRoutingModule
  ],
  declarations: [ShoppingAddressAddPage]
})
export class ShoppingAddressAddPageModule {}
