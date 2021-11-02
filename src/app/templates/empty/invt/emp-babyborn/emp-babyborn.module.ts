import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpBabybornPageRoutingModule } from './emp-babyborn-routing.module';

import { EmpBabybornPage } from './emp-babyborn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpBabybornPageRoutingModule
  ],
  declarations: [EmpBabybornPage]
})
export class EmpBabybornPageModule {}
