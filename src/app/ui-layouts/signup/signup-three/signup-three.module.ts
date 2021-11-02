import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { SignupThreePageRoutingModule } from './signup-three-routing.module';

import { SignupThreePage } from './signup-three.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupThreePageRoutingModule,
    TranslateModule
  ],
  declarations: [SignupThreePage]
})
export class SignupThreePageModule {}
