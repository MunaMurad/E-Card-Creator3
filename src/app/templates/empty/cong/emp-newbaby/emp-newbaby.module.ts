import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpNewbabyPageRoutingModule } from './emp-newbaby-routing.module';
import {TranslateModule} from '@ngx-translate/core';
import { EmpNewbabyPage } from './emp-newbaby.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpNewbabyPageRoutingModule,
    TranslateModule
  ],
  declarations: [EmpNewbabyPage]
})
export class EmpNewbabyPageModule {}
