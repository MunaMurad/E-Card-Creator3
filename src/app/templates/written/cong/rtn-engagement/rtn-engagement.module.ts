import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RtnEngagementPageRoutingModule } from './rtn-engagement-routing.module';

import { RtnEngagementPage } from './rtn-engagement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RtnEngagementPageRoutingModule
  ],
  declarations: [RtnEngagementPage]
})
export class RtnEngagementPageModule {}
