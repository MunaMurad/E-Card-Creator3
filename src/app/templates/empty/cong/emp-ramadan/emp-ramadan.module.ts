import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpRamadanPageRoutingModule } from './emp-ramadan-routing.module';

import { EmpRamadanPage } from './emp-ramadan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpRamadanPageRoutingModule
  ],
  declarations: [EmpRamadanPage]
})
export class EmpRamadanPageModule {}
