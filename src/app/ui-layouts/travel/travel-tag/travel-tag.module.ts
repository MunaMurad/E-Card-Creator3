import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TravelTagPageRoutingModule } from './travel-tag-routing.module';

import { TravelTagPage } from './travel-tag.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TravelTagPageRoutingModule
  ],
  declarations: [TravelTagPage]
})
export class TravelTagPageModule {}
