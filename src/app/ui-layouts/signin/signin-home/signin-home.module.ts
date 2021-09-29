import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SigninHomePageRoutingModule } from './signin-home-routing.module';

import { SigninHomePage } from './signin-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SigninHomePageRoutingModule
  ],
  declarations: [SigninHomePage]
})
export class SigninHomePageModule {}
