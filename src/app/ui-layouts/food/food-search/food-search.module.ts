import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodSearchPageRoutingModule } from './food-search-routing.module';

import { FoodSearchPage } from './food-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodSearchPageRoutingModule
  ],
  declarations: [FoodSearchPage]
})
export class FoodSearchPageModule {}
