import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupOnePageRoutingModule } from './signup-one-routing.module';

import { SignupOnePage } from './signup-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupOnePageRoutingModule
  ],
  declarations: [SignupOnePage]
})
export class SignupOnePageModule {}
