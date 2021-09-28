import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapTwoPageRoutingModule } from './map-two-routing.module';

import { MapTwoPage } from './map-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapTwoPageRoutingModule
  ],
  declarations: [MapTwoPage]
})
export class MapTwoPageModule {}
