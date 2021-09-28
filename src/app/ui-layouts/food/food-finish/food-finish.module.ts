import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodFinishPageRoutingModule } from './food-finish-routing.module';

import { FoodFinishPage } from './food-finish.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodFinishPageRoutingModule
  ],
  declarations: [FoodFinishPage]
})
export class FoodFinishPageModule {}
