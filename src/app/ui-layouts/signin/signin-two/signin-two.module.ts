import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SigninTwoPageRoutingModule } from './signin-two-routing.module';

import { SigninTwoPage } from './signin-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SigninTwoPageRoutingModule
  ],
  declarations: [SigninTwoPage]
})
export class SigninTwoPageModule {}
