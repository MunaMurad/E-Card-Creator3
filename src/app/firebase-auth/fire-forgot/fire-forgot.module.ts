import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { FireForgotPageRoutingModule } from './fire-forgot-routing.module';

import { FireForgotPage } from './fire-forgot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FireForgotPageRoutingModule,
    TranslateModule
  ],
  declarations: [FireForgotPage]
})
export class FireForgotPageModule {}
