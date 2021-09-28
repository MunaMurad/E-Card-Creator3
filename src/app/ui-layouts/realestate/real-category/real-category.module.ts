import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RealCategoryPageRoutingModule } from './real-category-routing.module';

import { RealCategoryPage } from './real-category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RealCategoryPageRoutingModule
  ],
  declarations: [RealCategoryPage]
})
export class RealCategoryPageModule {}
