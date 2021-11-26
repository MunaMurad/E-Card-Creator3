import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { QRScannerPageRoutingModule } from './qr-scanner-routing.module';
import {TranslateModule} from '@ngx-translate/core';
import { QRScannerPage } from './qr-scanner.page';
//import{InvitationDetails} from'../../congratspages/image-editor/InvitationDetails';
//import { EncryptionService } from './../../services/encryption.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRScannerPageRoutingModule,
    TranslateModule,
   //InvitationDetails,
   //EncryptionService
  ],
  declarations: [QRScannerPage]
})
export class QRScannerPageModule {}