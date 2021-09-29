import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TravelImageViewPageRoutingModule } from './travel-image-view-routing.module';

import { TravelImageViewPage } from './travel-image-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TravelImageViewPageRoutingModule
  ],
  declarations: [TravelImageViewPage]
})
export class TravelImageViewPageModule {}
