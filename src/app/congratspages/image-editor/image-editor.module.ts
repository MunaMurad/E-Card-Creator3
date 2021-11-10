import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImageEditorPageRoutingModule } from './image-editor-routing.module';

import { ImageEditorPage } from './image-editor.page';

import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImageEditorPageRoutingModule,
    TranslateModule
  ],
  declarations: [ImageEditorPage]
})
export class ImageEditorPageModule {}
