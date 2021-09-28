import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FireSignupPageRoutingModule } from './fire-signup-routing.module';

import { FireSignupPage } from './fire-signup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FireSignupPageRoutingModule
  ],
  declarations: [FireSignupPage]
})
export class FireSignupPageModule {}
