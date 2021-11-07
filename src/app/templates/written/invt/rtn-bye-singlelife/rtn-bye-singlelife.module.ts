import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { RtnByeSinglelifePageRoutingModule } from './rtn-bye-singlelife-routing.module';
import { RtnByeSinglelifePage } from './rtn-bye-singlelife.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RtnByeSinglelifePageRoutingModule,
    TranslateModule
  ],
  declarations: [RtnByeSinglelifePage]
})
export class RtnByeSinglelifePageModule {}
