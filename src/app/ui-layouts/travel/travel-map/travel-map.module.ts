import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TravelMapPageRoutingModule } from './travel-map-routing.module';

import { TravelMapPage } from './travel-map.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TravelMapPageRoutingModule
  ],
  declarations: [TravelMapPage]
})
export class TravelMapPageModule {}
