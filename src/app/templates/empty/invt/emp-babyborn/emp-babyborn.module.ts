import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpBabybornPageRoutingModule } from './emp-babyborn-routing.module';
import {TranslateModule} from '@ngx-translate/core';
import { EmpBabybornPage } from './emp-babyborn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpBabybornPageRoutingModule,
    TranslateModule
  ],
  declarations: [EmpBabybornPage]
})
export class EmpBabybornPageModule {}
