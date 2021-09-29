import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RadioPlayerPageRoutingModule } from './radio-player-routing.module';

import { RadioPlayerPage } from './radio-player.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RadioPlayerPageRoutingModule
  ],
  declarations: [RadioPlayerPage]
})
export class RadioPlayerPageModule {}
