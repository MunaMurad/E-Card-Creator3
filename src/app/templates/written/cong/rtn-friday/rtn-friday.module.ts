import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RtnFridayPageRoutingModule } from './rtn-friday-routing.module';

import { RtnFridayPage } from './rtn-friday.page';
import {TranslateModule} from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RtnFridayPageRoutingModule,
    TranslateModule
  ],
  declarations: [RtnFridayPage]
})
export class RtnFridayPageModule {}
