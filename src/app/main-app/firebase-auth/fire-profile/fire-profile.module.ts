import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FireProfilePageRoutingModule } from './fire-profile-routing.module';

import { FireProfilePage } from './fire-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FireProfilePageRoutingModule
  ],
  declarations: [FireProfilePage]
})
export class FireProfilePageModule {}
