import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EidAladhaPageRoutingModule } from './eid-aladha-routing.module';

import { EidAladhaPage } from './eid-aladha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EidAladhaPageRoutingModule
  ],
  declarations: [EidAladhaPage]
})
export class EidAladhaPageModule {}
