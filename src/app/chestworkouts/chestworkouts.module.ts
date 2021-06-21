import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChestworkoutsPageRoutingModule } from './chestworkouts-routing.module';

import { ChestworkoutsPage } from './chestworkouts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChestworkoutsPageRoutingModule
  ],
  declarations: [ChestworkoutsPage]
})
export class ChestworkoutsPageModule {}
