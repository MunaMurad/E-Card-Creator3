import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpEidAlfitrPageRoutingModule } from './emp-eid-alfitr-routing.module';

import { EmpEidAlfitrPage } from './emp-eid-alfitr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpEidAlfitrPageRoutingModule
  ],
  declarations: [EmpEidAlfitrPage]
})
export class EmpEidAlfitrPageModule {}
