import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RtnByeSinglelifePage } from './rtn-bye-singlelife.page';

const routes: Routes = [
  {
    path: '',
    component: RtnByeSinglelifePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RtnByeSinglelifePageRoutingModule {}
