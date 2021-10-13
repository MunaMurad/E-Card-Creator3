import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmptyFridayPageRoutingModule } from './empty-friday-routing.module';

import { EmptyFridayPage } from './empty-friday.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmptyFridayPageRoutingModule
  ],
  declarations: [EmptyFridayPage]
})
export class EmptyFridayPageModule {}
