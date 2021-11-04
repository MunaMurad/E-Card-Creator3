import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { SettPageRoutingModule } from './sett-routing.module';

import { SettPage } from './sett.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettPageRoutingModule,
    TranslateModule
  ],
  declarations: [SettPage]
})
export class SettPageModule {}
