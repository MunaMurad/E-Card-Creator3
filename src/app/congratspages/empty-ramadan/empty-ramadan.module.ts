import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmptyRamadanPageRoutingModule } from './empty-ramadan-routing.module';

import { EmptyRamadanPage } from './empty-ramadan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmptyRamadanPageRoutingModule
  ],
  declarations: [EmptyRamadanPage]
})
export class EmptyRamadanPageModule {}
