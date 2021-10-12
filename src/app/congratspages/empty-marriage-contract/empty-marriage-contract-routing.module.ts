import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmptyMarriageContractPage } from './empty-marriage-contract.page';

const routes: Routes = [
  {
    path: '',
    component: EmptyMarriageContractPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmptyMarriageContractPageRoutingModule {}
