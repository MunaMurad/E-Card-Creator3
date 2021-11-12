import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpEidAlfitrPageRoutingModule } from './emp-eid-alfitr-routing.module';
import {TranslateModule} from '@ngx-translate/core';
import { EmpEidAlfitrPage } from './emp-eid-alfitr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpEidAlfitrPageRoutingModule, 
    TranslateModule
  ],
  declarations: [EmpEidAlfitrPage]
})
export class EmpEidAlfitrPageModule {}
