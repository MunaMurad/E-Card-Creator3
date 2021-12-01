import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrScanningPageRoutingModule } from './qr-scanning-routing.module';

import { QrScanningPage } from './qr-scanning.page';
import {TranslateModule} from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrScanningPageRoutingModule,
    TranslateModule
  ],
  declarations: [QrScanningPage]
})
export class QrScanningPageModule {}
