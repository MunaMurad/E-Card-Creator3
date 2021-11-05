import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';


import { IonicModule } from '@ionic/angular';

import { RtnMarriagePageRoutingModule } from './rtn-marriage-routing.module';

import { RtnMarriagePage } from './rtn-marriage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RtnMarriagePageRoutingModule,
    TranslateModule

  ],
  declarations: [RtnMarriagePage]
})
export class RtnMarriagePageModule {}
