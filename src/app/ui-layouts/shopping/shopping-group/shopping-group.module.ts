import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingGroupPageRoutingModule } from './shopping-group-routing.module';

import { ShoppingGroupPage } from './shopping-group.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingGroupPageRoutingModule
  ],
  declarations: [ShoppingGroupPage]
})
export class ShoppingGroupPageModule {}
