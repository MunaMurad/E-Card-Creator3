import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmptyEidAlfitrPage } from './empty-eid-alfitr.page';

const routes: Routes = [
  {
    path: '',
    component: EmptyEidAlfitrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmptyEidAlfitrPageRoutingModule {}
