import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodHomePageRoutingModule } from './food-home-routing.module';

import { FoodHomePage } from './food-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodHomePageRoutingModule
  ],
  declarations: [FoodHomePage]
})
export class FoodHomePageModule {}
