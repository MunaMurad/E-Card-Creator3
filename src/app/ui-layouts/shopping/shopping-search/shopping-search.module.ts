import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingSearchPageRoutingModule } from './shopping-search-routing.module';

import { ShoppingSearchPage } from './shopping-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingSearchPageRoutingModule
  ],
  declarations: [ShoppingSearchPage]
})
export class ShoppingSearchPageModule {}
