import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RtnMarriagePageRoutingModule } from './rtn-marriage-routing.module';

import { RtnMarriagePage } from './rtn-marriage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RtnMarriagePageRoutingModule
  ],
  declarations: [RtnMarriagePage]
})
export class RtnMarriagePageModule {}
