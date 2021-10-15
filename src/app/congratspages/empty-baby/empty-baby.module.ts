import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmptyBabyPageRoutingModule } from './empty-baby-routing.module';

import { EmptyBabyPage } from './empty-baby.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmptyBabyPageRoutingModule
  ],
  declarations: [EmptyBabyPage]
})
export class EmptyBabyPageModule {}
