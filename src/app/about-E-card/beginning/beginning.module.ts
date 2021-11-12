import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BeginningPageRoutingModule } from './beginning-routing.module';
import {TranslateModule} from '@ngx-translate/core';
import { BeginningPage } from './beginning.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeginningPageRoutingModule,
    TranslateModule
  ],
  declarations: [BeginningPage]
})
export class BeginningPageModule {}
