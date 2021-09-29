import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorizontalCardPageRoutingModule } from './horizontal-card-routing.module';

import { HorizontalCardPage } from './horizontal-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorizontalCardPageRoutingModule
  ],
  declarations: [HorizontalCardPage]
})
export class HorizontalCardPageModule {}
