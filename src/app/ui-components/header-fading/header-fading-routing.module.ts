import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderFadingPage } from './header-fading.page';

const routes: Routes = [
  {
    path: '',
    component: HeaderFadingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderFadingPageRoutingModule {}
