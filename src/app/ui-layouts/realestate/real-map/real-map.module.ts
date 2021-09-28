import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RealMapPageRoutingModule } from './real-map-routing.module';

import { RealMapPage } from './real-map.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RealMapPageRoutingModule
  ],
  declarations: [RealMapPage]
})
export class RealMapPageModule {}
