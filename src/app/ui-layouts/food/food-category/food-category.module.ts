import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodCategoryPageRoutingModule } from './food-category-routing.module';

import { FoodCategoryPage } from './food-category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodCategoryPageRoutingModule
  ],
  declarations: [FoodCategoryPage]
})
export class FoodCategoryPageModule {}
