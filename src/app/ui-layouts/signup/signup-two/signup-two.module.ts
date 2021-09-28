import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupTwoPageRoutingModule } from './signup-two-routing.module';

import { SignupTwoPage } from './signup-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupTwoPageRoutingModule
  ],
  declarations: [SignupTwoPage]
})
export class SignupTwoPageModule {}
