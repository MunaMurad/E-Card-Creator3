import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapOnePageRoutingModule } from './map-one-routing.module';

import { MapOnePage } from './map-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapOnePageRoutingModule
  ],
  declarations: [MapOnePage]
})
export class MapOnePageModule {}
