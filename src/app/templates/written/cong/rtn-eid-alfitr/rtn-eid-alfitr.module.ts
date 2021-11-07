import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RtnEidAlfitrPageRoutingModule } from './rtn-eid-alfitr-routing.module';
import {TranslateModule} from '@ngx-translate/core';
import { RtnEidAlfitrPage } from './rtn-eid-alfitr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RtnEidAlfitrPageRoutingModule,
    TranslateModule
  ],
  declarations: [RtnEidAlfitrPage]
})
export class RtnEidAlfitrPageModule {}
