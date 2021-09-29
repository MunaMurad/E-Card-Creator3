import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeaderShrinkingPageRoutingModule } from './header-shrinking-routing.module';

import { HeaderShrinkingPage } from './header-shrinking.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    HeaderShrinkingPageRoutingModule
  ],
  declarations: [HeaderShrinkingPage]
})
export class HeaderShrinkingPageModule {}
