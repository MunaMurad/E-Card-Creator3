import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RtnGraduPageRoutingModule } from './rtn-gradu-routing.module';
import {TranslateModule} from '@ngx-translate/core';
import { RtnGraduPage } from './rtn-gradu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RtnGraduPageRoutingModule,
    TranslateModule
    
  ],
  declarations: [RtnGraduPage]
})
export class RtnGraduPageModule {}
