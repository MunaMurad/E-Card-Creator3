import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodTabsPageRoutingModule } from './food-tabs-routing.module';

import { FoodTabsPage } from './food-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodTabsPageRoutingModule
  ],
  declarations: [FoodTabsPage]
})
export class FoodTabsPageModule {}
