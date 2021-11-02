import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpGraduPageRoutingModule } from './emp-gradu-routing.module';

import { EmpGraduPage } from './emp-gradu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpGraduPageRoutingModule
  ],
  declarations: [EmpGraduPage]
})
export class EmpGraduPageModule {}
