import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SigninThreePageRoutingModule } from './signin-three-routing.module';

import { SigninThreePage } from './signin-three.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SigninThreePageRoutingModule
  ],
  declarations: [SigninThreePage]
})
export class SigninThreePageModule {}
