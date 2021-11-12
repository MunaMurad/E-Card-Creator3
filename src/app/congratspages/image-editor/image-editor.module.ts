import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImageEditorPageRoutingModule } from './image-editor-routing.module';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { ImageEditorPage } from './image-editor.page';
import { QRCodeSVGModule } from 'ngx-qrcode-svg';
@NgModule({
  imports: [
    NgxQRCodeModule,
    QRCodeSVGModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ImageEditorPageRoutingModule
  ],
  declarations: [ImageEditorPage]
})
export class ImageEditorPageModule {}
