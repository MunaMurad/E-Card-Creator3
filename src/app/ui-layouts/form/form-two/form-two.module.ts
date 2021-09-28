import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormTwoPageRoutingModule } from './form-two-routing.module';

import { FormTwoPage } from './form-two.page';
//import { IonicRatingModule  } from "ionic4-rating/dist";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    //IonicRatingModule,
    FormTwoPageRoutingModule
  ],
  declarations: [FormTwoPage]
})
export class FormTwoPageModule {}
