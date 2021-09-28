import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeaderFadingPageRoutingModule } from './header-fading-routing.module';

import { HeaderFadingPage } from './header-fading.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderFadingPageRoutingModule
  ],
  declarations: [HeaderFadingPage]
})
export class HeaderFadingPageModule {}
