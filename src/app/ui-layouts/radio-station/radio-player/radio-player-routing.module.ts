import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RadioPlayerPage } from './radio-player.page';

const routes: Routes = [
  {
    path: '',
    component: RadioPlayerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RadioPlayerPageRoutingModule {}
