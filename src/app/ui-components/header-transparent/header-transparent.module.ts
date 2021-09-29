import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeaderTransparentPageRoutingModule } from './header-transparent-routing.module';

import { HeaderTransparentPage } from './header-transparent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderTransparentPageRoutingModule
  ],
  declarations: [HeaderTransparentPage]
})
export class HeaderTransparentPageModule {}
