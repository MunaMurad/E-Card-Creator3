import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpGraduationPageRoutingModule } from './emp-graduation-routing.module';
import {TranslateModule} from '@ngx-translate/core';
import { EmpGraduationPage } from './emp-graduation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpGraduationPageRoutingModule,
    TranslateModule
  ],
  declarations: [EmpGraduationPage]
})
export class EmpGraduationPageModule {}
