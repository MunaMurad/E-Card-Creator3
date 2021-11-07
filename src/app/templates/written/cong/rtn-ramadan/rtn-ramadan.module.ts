import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RtnRamadanPageRoutingModule } from './rtn-ramadan-routing.module';
import {TranslateModule} from '@ngx-translate/core';

import { RtnRamadanPage } from './rtn-ramadan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RtnRamadanPageRoutingModule,
    TranslateModule
  ],
  declarations: [RtnRamadanPage]
})
export class RtnRamadanPageModule {}
