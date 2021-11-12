import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpByeSinglelifePageRoutingModule } from './emp-bye-singlelife-routing.module';
import {TranslateModule} from '@ngx-translate/core';
import { EmpByeSinglelifePage } from './emp-bye-singlelife.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpByeSinglelifePageRoutingModule,
    TranslateModule
  ],
  declarations: [EmpByeSinglelifePage]
})
export class EmpByeSinglelifePageModule {}
