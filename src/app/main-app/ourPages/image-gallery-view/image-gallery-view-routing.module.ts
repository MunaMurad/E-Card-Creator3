import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageGalleryViewPage } from './image-gallery-view.page';

const routes: Routes = [
  {
    path: '',
    component: ImageGalleryViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImageGalleryViewPageRoutingModule {}
