import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupHomePageRoutingModule } from './signup-home-routing.module';

import { SignupHomePage } from './signup-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupHomePageRoutingModule
  ],
  declarations: [SignupHomePage]
})
export class SignupHomePageModule {}
