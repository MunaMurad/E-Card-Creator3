import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { CongratulatePageRoutingModule } from './congratulate-routing.module';

import { CongratulatePage } from './congratulate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CongratulatePageRoutingModule,
    TranslateModule
  ],
  declarations: [CongratulatePage]
})
export class CongratulatePageModule {}
