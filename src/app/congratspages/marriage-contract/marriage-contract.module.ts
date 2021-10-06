import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarriageContractPageRoutingModule } from './marriage-contract-routing.module';

import { MarriageContractPage } from './marriage-contract.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarriageContractPageRoutingModule
  ],
  declarations: [MarriageContractPage]
})
export class MarriageContractPageModule {}
