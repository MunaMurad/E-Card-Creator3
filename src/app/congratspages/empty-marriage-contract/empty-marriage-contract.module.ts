import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmptyMarriageContractPageRoutingModule } from './empty-marriage-contract-routing.module';

import { EmptyMarriageContractPage } from './empty-marriage-contract.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmptyMarriageContractPageRoutingModule
  ],
  declarations: [EmptyMarriageContractPage]
})
export class EmptyMarriageContractPageModule {}
