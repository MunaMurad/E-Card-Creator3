import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MasonryPageRoutingModule } from './masonry-routing.module';

import { MasonryPage } from './masonry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MasonryPageRoutingModule
  ],
  declarations: [MasonryPage]
})
export class MasonryPageModule {}
