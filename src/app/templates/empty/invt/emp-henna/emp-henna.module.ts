import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EmpHennaPageRoutingModule } from './emp-henna-routing.module';
import {TranslateModule} from '@ngx-translate/core';
import { EmpHennaPage } from './emp-henna.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpHennaPageRoutingModule,
    TranslateModule
    
  ],
  declarations: [EmpHennaPage]
})
export class EmpHennaPageModule {}
