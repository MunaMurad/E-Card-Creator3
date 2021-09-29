import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormOnePageRoutingModule } from './form-one-routing.module';

import { FormOnePage } from './form-one.page';
//import { IonicRatingModule  } from "ionic4-rating/dist";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    //IonicRatingModule,
    FormOnePageRoutingModule
  ],
  declarations: [FormOnePage]
})
export class FormOnePageModule {}
