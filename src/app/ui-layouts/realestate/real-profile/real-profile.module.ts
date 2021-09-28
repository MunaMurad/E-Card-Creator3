import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RealProfilePageRoutingModule } from './real-profile-routing.module';

import { RealProfilePage } from './real-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RealProfilePageRoutingModule
  ],
  declarations: [RealProfilePage]
})
export class RealProfilePageModule {}
