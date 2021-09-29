import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormHomePageRoutingModule } from './form-home-routing.module';

import { FormHomePage } from './form-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormHomePageRoutingModule
  ],
  declarations: [FormHomePage]
})
export class FormHomePageModule {}
