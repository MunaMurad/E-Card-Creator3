import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TravelSearchPageRoutingModule } from './travel-search-routing.module';

import { TravelSearchPage } from './travel-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TravelSearchPageRoutingModule
  ],
  declarations: [TravelSearchPage]
})
export class TravelSearchPageModule {}
