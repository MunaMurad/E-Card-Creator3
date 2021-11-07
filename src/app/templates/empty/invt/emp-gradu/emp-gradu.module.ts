import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EmpGraduPageRoutingModule } from './emp-gradu-routing.module';
import {TranslateModule} from '@ngx-translate/core';
import { EmpGraduPage } from './emp-gradu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpGraduPageRoutingModule,
    TranslateModule
    
  ],
  declarations: [EmpGraduPage]
})
export class EmpGraduPageModule {}
