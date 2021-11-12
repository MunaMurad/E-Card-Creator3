import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { EmpWeddingPageRoutingModule } from './emp-wedding-routing.module';
import { EmpWeddingPage } from './emp-wedding.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpWeddingPageRoutingModule,
    TranslateModule
  ],
  declarations: [EmpWeddingPage]
})
export class EmpWeddingPageModule {}
