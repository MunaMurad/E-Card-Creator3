import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingAddressEditPageRoutingModule } from './shopping-address-edit-routing.module';

import { ShoppingAddressEditPage } from './shopping-address-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ShoppingAddressEditPageRoutingModule
  ],
  declarations: [ShoppingAddressEditPage]
})
export class ShoppingAddressEditPageModule {}
