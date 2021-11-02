import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RtnBabybornPage } from './rtn-babyborn.page';

const routes: Routes = [
  {
    path: '',
    component: RtnBabybornPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RtnBabybornPageRoutingModule {}
