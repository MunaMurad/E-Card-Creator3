import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrModalPage } from './qr-modal.page';

const routes: Routes = [
  {
    path: '',
    component: QrModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrModalPageRoutingModule {}
