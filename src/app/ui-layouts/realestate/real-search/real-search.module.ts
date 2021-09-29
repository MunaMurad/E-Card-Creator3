import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RealSearchPageRoutingModule } from './real-search-routing.module';

import { RealSearchPage } from './real-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RealSearchPageRoutingModule
  ],
  declarations: [RealSearchPage]
})
export class RealSearchPageModule {}
