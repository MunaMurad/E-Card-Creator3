import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { RtnWeddingPageRoutingModule } from './rtn-wedding-routing.module';
import { RtnWeddingPage } from './rtn-wedding.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RtnWeddingPageRoutingModule,
    TranslateModule
  ],
  declarations: [RtnWeddingPage]
})
export class RtnWeddingPageModule {}
