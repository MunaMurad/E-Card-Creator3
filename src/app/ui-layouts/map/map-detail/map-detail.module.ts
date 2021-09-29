import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapDetailPageRoutingModule } from './map-detail-routing.module';

import { MapDetailPage } from './map-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapDetailPageRoutingModule
  ],
  declarations: [MapDetailPage]
})
export class MapDetailPageModule {}
