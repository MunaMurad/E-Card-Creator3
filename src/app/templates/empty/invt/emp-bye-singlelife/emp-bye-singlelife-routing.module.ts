import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpByeSinglelifePage } from './emp-bye-singlelife.page';

const routes: Routes = [
  {
    path: '',
    component: EmpByeSinglelifePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpByeSinglelifePageRoutingModule {}
