import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CongratsPage } from './congrats.page';

const routes: Routes = [
  {
    path: '',
    component: CongratsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CongratsPageRoutingModule {}
