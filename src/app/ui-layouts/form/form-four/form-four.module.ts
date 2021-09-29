import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormFourPageRoutingModule } from './form-four-routing.module';

import { FormFourPage } from './form-four.page';
//import { IonicRatingModule  } from "ionic4-rating/dist";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    //IonicRatingModule,
    FormFourPageRoutingModule
  ],
  declarations: [FormFourPage]
})
export class FormFourPageModule {}
