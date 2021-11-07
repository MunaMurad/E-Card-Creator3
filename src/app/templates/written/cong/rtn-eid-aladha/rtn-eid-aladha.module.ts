import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RtnEidAladhaPageRoutingModule } from './rtn-eid-aladha-routing.module';
import {TranslateModule} from '@ngx-translate/core';

import { RtnEidAladhaPage } from './rtn-eid-aladha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RtnEidAladhaPageRoutingModule,
    TranslateModule
  ],
  declarations: [RtnEidAladhaPage]
})
export class RtnEidAladhaPageModule {}
