import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RtnByeSinglelifePageRoutingModule } from './rtn-bye-singlelife-routing.module';

import { RtnByeSinglelifePage } from './rtn-bye-singlelife.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RtnByeSinglelifePageRoutingModule
  ],
  declarations: [RtnByeSinglelifePage]
})
export class RtnByeSinglelifePageModule {}
