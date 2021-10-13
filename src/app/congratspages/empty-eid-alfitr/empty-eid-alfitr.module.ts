import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmptyEidAlfitrPageRoutingModule } from './empty-eid-alfitr-routing.module';

import { EmptyEidAlfitrPage } from './empty-eid-alfitr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmptyEidAlfitrPageRoutingModule
  ],
  declarations: [EmptyEidAlfitrPage]
})
export class EmptyEidAlfitrPageModule {}
