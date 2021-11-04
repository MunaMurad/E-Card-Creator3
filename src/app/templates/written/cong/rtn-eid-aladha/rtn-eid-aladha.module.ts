import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RtnEidAladhaPageRoutingModule } from './rtn-eid-aladha-routing.module';

import { RtnEidAladhaPage } from './rtn-eid-aladha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RtnEidAladhaPageRoutingModule
  ],
  declarations: [RtnEidAladhaPage]
})
export class RtnEidAladhaPageModule {}
