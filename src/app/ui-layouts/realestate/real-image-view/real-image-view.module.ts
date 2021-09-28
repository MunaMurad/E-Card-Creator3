import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RealImageViewPageRoutingModule } from './real-image-view-routing.module';

import { RealImageViewPage } from './real-image-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RealImageViewPageRoutingModule
  ],
  declarations: [RealImageViewPage]
})
export class RealImageViewPageModule {}
