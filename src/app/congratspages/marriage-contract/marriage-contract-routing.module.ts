import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarriageContractPage } from './marriage-contract.page';

const routes: Routes = [
  {
    path: '',
    component: MarriageContractPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarriageContractPageRoutingModule {}
