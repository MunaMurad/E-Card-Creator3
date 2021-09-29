import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SigninOnePageRoutingModule } from './signin-one-routing.module';

import { SigninOnePage } from './signin-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SigninOnePageRoutingModule
  ],
  declarations: [SigninOnePage]
})
export class SigninOnePageModule {}
