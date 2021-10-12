import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngagementPageRoutingModule } from './engagement-routing.module';

import { EngagementPage } from './engagement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngagementPageRoutingModule
  ],
  declarations: [EngagementPage]
})
export class EngagementPageModule {}
