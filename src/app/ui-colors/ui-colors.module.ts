import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UiColorsPageRoutingModule } from './ui-colors-routing.module';

import { UiColorsPage } from './ui-colors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UiColorsPageRoutingModule
  ],
  declarations: [UiColorsPage]
})
export class UiColorsPageModule {}
