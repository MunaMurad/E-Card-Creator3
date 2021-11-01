import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroPagePage } from './intro-page.page';

const routes: Routes = [
  {
    path: '',
    component: IntroPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntroPagePageRoutingModule {}
