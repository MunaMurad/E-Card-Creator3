import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RtnEngagementPageRoutingModule } from './rtn-engagement-routing.module';

import { RtnEngagementPage } from './rtn-engagement.page';
import {TranslateModule} from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RtnEngagementPageRoutingModule,
    TranslateModule
  ],
  declarations: [RtnEngagementPage]
})
export class RtnEngagementPageModule {}
