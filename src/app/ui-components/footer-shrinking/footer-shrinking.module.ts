import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FooterShrinkingPageRoutingModule } from './footer-shrinking-routing.module';

import { FooterShrinkingPage } from './footer-shrinking.page';

import { SharedModule } from '../../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    FooterShrinkingPageRoutingModule
  ],
  declarations: [FooterShrinkingPage]
})
export class FooterShrinkingPageModule {}
