import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderShrinkingPage } from './header-shrinking.page';

const routes: Routes = [
  {
    path: '',
    component: HeaderShrinkingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderShrinkingPageRoutingModule {}
