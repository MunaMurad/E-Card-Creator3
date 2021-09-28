import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TravelListPageRoutingModule } from './travel-list-routing.module';

import { TravelListPage } from './travel-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TravelListPageRoutingModule
  ],
  declarations: [TravelListPage]
})
export class TravelListPageModule {}
