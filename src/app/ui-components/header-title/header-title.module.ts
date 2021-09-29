import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeaderTitlePageRoutingModule } from './header-title-routing.module';

import { HeaderTitlePage } from './header-title.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderTitlePageRoutingModule
  ],
  declarations: [HeaderTitlePage]
})
export class HeaderTitlePageModule {}
