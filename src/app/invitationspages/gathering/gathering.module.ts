import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GatheringPageRoutingModule } from './gathering-routing.module';

import { GatheringPage } from './gathering.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GatheringPageRoutingModule
  ],
  declarations: [GatheringPage]
})
export class GatheringPageModule {}
