import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmptyStatePageRoutingModule } from './empty-state-routing.module';

import { EmptyStatePage } from './empty-state.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmptyStatePageRoutingModule
  ],
  declarations: [EmptyStatePage]
})
export class EmptyStatePageModule {}
