import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingCategoryPageRoutingModule } from './shopping-category-routing.module';

import { ShoppingCategoryPage } from './shopping-category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingCategoryPageRoutingModule
  ],
  declarations: [ShoppingCategoryPage]
})
export class ShoppingCategoryPageModule {}
