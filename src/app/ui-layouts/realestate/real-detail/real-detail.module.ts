import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RealDetailPageRoutingModule } from './real-detail-routing.module';

import { RealDetailPage } from './real-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RealDetailPageRoutingModule
  ],
  declarations: [RealDetailPage]
})
export class RealDetailPageModule {}
