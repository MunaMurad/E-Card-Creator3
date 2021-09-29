import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RadioListPageRoutingModule } from './radio-list-routing.module';

import { RadioListPage } from './radio-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RadioListPageRoutingModule
  ],
  declarations: [RadioListPage]
})
export class RadioListPageModule {}
