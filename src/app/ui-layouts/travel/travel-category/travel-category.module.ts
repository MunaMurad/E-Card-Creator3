import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TravelCategoryPageRoutingModule } from './travel-category-routing.module';

import { TravelCategoryPage } from './travel-category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TravelCategoryPageRoutingModule
  ],
  declarations: [TravelCategoryPage]
})
export class TravelCategoryPageModule {}
