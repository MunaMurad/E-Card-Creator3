import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RealHomePageRoutingModule } from './real-home-routing.module';

import { RealHomePage } from './real-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RealHomePageRoutingModule
  ],
  declarations: [RealHomePage]
})
export class RealHomePageModule {}
