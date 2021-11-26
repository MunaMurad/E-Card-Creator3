import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RtnNewbabyPageRoutingModule } from './rtn-newbaby-routing.module';
import {TranslateModule} from '@ngx-translate/core';

import { RtnNewbabyPage } from './rtn-newbaby.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RtnNewbabyPageRoutingModule,
    TranslateModule
  ],
  declarations: [RtnNewbabyPage]
})
export class RtnNewbabyPageModule {}