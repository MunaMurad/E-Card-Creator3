import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpFridayPageRoutingModule } from './emp-friday-routing.module';
import {TranslateModule} from '@ngx-translate/core';
import { EmpFridayPage } from './emp-friday.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpFridayPageRoutingModule,
    TranslateModule
  ],
  declarations: [EmpFridayPage]
})
export class EmpFridayPageModule {}
