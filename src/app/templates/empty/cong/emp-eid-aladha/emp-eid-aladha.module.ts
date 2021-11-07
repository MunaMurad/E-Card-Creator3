import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpEidAladhaPageRoutingModule } from './emp-eid-aladha-routing.module';
import {TranslateModule} from '@ngx-translate/core';
import { EmpEidAladhaPage } from './emp-eid-aladha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpEidAladhaPageRoutingModule,
    TranslateModule
  ],
  declarations: [EmpEidAladhaPage]
})
export class EmpEidAladhaPageModule {}
