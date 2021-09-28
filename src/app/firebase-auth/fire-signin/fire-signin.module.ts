import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FireSigninPageRoutingModule } from './fire-signin-routing.module';

import { FireSigninPage } from './fire-signin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FireSigninPageRoutingModule
  ],
  declarations: [FireSigninPage]
})
export class FireSigninPageModule {}
