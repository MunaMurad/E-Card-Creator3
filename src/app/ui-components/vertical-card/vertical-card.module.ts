import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerticalCardPageRoutingModule } from './vertical-card-routing.module';

import { VerticalCardPage } from './vertical-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerticalCardPageRoutingModule
  ],
  declarations: [VerticalCardPage]
})
export class VerticalCardPageModule {}
