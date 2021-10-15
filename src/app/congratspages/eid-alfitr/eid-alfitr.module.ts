import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EidAlfitrPageRoutingModule } from './eid-alfitr-routing.module';

import { EidAlfitrPage } from './eid-alfitr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EidAlfitrPageRoutingModule
  ],
  declarations: [EidAlfitrPage]
})
export class EidAlfitrPageModule {}
