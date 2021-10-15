import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FridayPageRoutingModule } from './friday-routing.module';

import { FridayPage } from './friday.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FridayPageRoutingModule
  ],
  declarations: [FridayPage]
})
export class FridayPageModule {}
