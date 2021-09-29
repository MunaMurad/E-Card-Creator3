import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormThreePageRoutingModule } from './form-three-routing.module';

import { FormThreePage } from './form-three.page';
//import { IonicRatingModule  } from "ionic4-rating/dist";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    //IonicRatingModule,
    FormThreePageRoutingModule
  ],
  declarations: [FormThreePage]
})
export class FormThreePageModule {}
