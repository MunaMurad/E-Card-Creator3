import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrScanningPage } from './qr-scanning.page';

const routes: Routes = [
  {
    path: '',
    component: QrScanningPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrScanningPageRoutingModule {}
