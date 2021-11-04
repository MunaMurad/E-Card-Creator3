import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RtnHomePartyPageRoutingModule } from './rtn-home-party-routing.module';

import { RtnHomePartyPage } from './rtn-home-party.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RtnHomePartyPageRoutingModule
  ],
  declarations: [RtnHomePartyPage]
})
export class RtnHomePartyPageModule {}
