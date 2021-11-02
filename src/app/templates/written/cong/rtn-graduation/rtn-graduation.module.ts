import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RtnGraduationPageRoutingModule } from './rtn-graduation-routing.module';

import { RtnGraduationPage } from './rtn-graduation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RtnGraduationPageRoutingModule
  ],
  declarations: [RtnGraduationPage]
})
export class RtnGraduationPageModule {}
