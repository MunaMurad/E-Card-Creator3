import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpMarriagePageRoutingModule } from './emp-marriage-routing.module';

import { EmpMarriagePage } from './emp-marriage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpMarriagePageRoutingModule
  ],
  declarations: [EmpMarriagePage]
})
export class EmpMarriagePageModule {}
