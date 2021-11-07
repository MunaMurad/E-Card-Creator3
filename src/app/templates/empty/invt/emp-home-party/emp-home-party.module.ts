import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EmpHomePartyPageRoutingModule } from './emp-home-party-routing.module';
import {TranslateModule} from '@ngx-translate/core';
import { EmpHomePartyPage } from './emp-home-party.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpHomePartyPageRoutingModule,
    TranslateModule
    
  ],
  declarations: [EmpHomePartyPage]
})
export class EmpHomePartyPageModule {}
