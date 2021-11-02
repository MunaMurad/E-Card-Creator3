import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { FireProfilePageRoutingModule } from './fire-profile-routing.module';

import { FireProfilePage } from './fire-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FireProfilePageRoutingModule,
    TranslateModule
  ],
  declarations: [FireProfilePage]
})
export class FireProfilePageModule {}
