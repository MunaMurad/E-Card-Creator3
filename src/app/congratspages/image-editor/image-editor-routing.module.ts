import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageEditorPage } from './image-editor.page';

const routes: Routes = [
  {
    path: '',
    component: ImageEditorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImageEditorPageRoutingModule {}
