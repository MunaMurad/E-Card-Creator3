import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UiColorsPage } from './ui-colors.page';

const routes: Routes = [
  {
    path: '',
    component: UiColorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiColorsPageRoutingModule {}
