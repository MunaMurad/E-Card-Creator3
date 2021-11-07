import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RtnHennaPageRoutingModule } from './rtn-henna-routing.module';
import {TranslateModule} from '@ngx-translate/core';
import { RtnHennaPage } from './rtn-henna.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RtnHennaPageRoutingModule,
    TranslateModule
  ],
  declarations: [RtnHennaPage]
})
export class RtnHennaPageModule {}
