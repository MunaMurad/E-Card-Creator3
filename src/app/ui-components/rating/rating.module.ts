import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RatingPageRoutingModule } from './rating-routing.module';

import { RatingPage } from './rating.page';
//import { IonicRatingModule  } from "ionic4-rating/dist";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    //IonicRatingModule,
    RatingPageRoutingModule
  ],
  declarations: [RatingPage]
})
export class RatingPageModule {}
