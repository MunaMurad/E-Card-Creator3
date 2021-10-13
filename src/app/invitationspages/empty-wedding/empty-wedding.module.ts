import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmptyWeddingPageRoutingModule } from './empty-wedding-routing.module';

import { EmptyWeddingPage } from './empty-wedding.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmptyWeddingPageRoutingModule
  ],
  declarations: [EmptyWeddingPage]
})
export class EmptyWeddingPageModule {}
