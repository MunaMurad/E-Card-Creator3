import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImageGalleryViewPageRoutingModule } from './image-gallery-view-routing.module';

import { ImageGalleryViewPage } from './image-gallery-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImageGalleryViewPageRoutingModule
  ],
  declarations: [ImageGalleryViewPage]
})
export class ImageGalleryViewPageModule {}
