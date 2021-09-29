import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapThreePageRoutingModule } from './map-three-routing.module';

import { MapThreePage } from './map-three.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapThreePageRoutingModule
  ],
  declarations: [MapThreePage]
})
export class MapThreePageModule {}
