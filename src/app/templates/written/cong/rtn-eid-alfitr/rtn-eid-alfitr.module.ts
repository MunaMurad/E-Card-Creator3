import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RtnEidAlfitrPageRoutingModule } from './rtn-eid-alfitr-routing.module';

import { RtnEidAlfitrPage } from './rtn-eid-alfitr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RtnEidAlfitrPageRoutingModule
  ],
  declarations: [RtnEidAlfitrPage]
})
export class RtnEidAlfitrPageModule {}
