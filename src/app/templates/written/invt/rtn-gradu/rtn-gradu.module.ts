import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RtnGraduPageRoutingModule } from './rtn-gradu-routing.module';

import { RtnGraduPage } from './rtn-gradu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RtnGraduPageRoutingModule
  ],
  declarations: [RtnGraduPage]
})
export class RtnGraduPageModule {}
