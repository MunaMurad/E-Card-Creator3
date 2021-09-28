import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IconPageRoutingModule } from './icon-routing.module';

import { IconPage } from './icon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IconPageRoutingModule
  ],
  declarations: [IconPage]
})
export class IconPageModule {}
