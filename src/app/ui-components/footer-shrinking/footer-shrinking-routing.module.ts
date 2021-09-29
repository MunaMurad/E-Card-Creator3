import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FooterShrinkingPage } from './footer-shrinking.page';

const routes: Routes = [
  {
    path: '',
    component: FooterShrinkingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FooterShrinkingPageRoutingModule {}
