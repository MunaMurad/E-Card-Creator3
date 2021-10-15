import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RamadanPageRoutingModule } from './ramadan-routing.module';

import { RamadanPage } from './ramadan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RamadanPageRoutingModule
  ],
  declarations: [RamadanPage]
})
export class RamadanPageModule {}
