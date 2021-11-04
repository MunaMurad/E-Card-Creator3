import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpNewbabyPageRoutingModule } from './emp-newbaby-routing.module';

import { EmpNewbabyPage } from './emp-newbaby.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpNewbabyPageRoutingModule
  ],
  declarations: [EmpNewbabyPage]
})
export class EmpNewbabyPageModule {}
