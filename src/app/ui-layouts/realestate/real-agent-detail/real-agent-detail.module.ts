import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RealAgentDetailPageRoutingModule } from './real-agent-detail-routing.module';

import { RealAgentDetailPage } from './real-agent-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RealAgentDetailPageRoutingModule
  ],
  declarations: [RealAgentDetailPage]
})
export class RealAgentDetailPageModule {}
