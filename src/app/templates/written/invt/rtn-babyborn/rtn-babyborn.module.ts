import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { RtnBabybornPageRoutingModule } from './rtn-babyborn-routing.module';
import { RtnBabybornPage } from './rtn-babyborn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RtnBabybornPageRoutingModule,
    TranslateModule
  ],
  declarations: [RtnBabybornPage]
})
export class RtnBabybornPageModule {}
