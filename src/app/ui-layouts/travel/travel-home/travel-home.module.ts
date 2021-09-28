import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TravelHomePageRoutingModule } from './travel-home-routing.module';

import { TravelHomePage } from './travel-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TravelHomePageRoutingModule
  ],
  declarations: [TravelHomePage]
})
export class TravelHomePageModule {}
