import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';


import { IonicModule } from '@ionic/angular';

import { IntroPagePageRoutingModule } from './intro-page-routing.module';

import { IntroPagePage } from './intro-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroPagePageRoutingModule,
    TranslateModule
  ],
  declarations: [IntroPagePage]
})
export class IntroPagePageModule {}
