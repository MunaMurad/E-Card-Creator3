import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QRScannerPage } from './qr-scanner.page';

const routes: Routes = [
  {
    path: '',
    component: QRScannerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QRScannerPageRoutingModule {}
