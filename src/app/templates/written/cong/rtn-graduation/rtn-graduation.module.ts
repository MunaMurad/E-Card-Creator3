import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RtnGraduationPageRoutingModule } from './rtn-graduation-routing.module';
import {TranslateModule} from '@ngx-translate/core';
import { RtnGraduationPage } from './rtn-graduation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RtnGraduationPageRoutingModule,
    TranslateModule
  ],
  declarations: [RtnGraduationPage]
})
export class RtnGraduationPageModule {}
