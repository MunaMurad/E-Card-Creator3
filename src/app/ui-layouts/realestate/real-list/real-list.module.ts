import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RealListPageRoutingModule } from './real-list-routing.module';

import { RealListPage } from './real-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RealListPageRoutingModule
  ],
  declarations: [RealListPage]
})
export class RealListPageModule {}
