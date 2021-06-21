import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoulderworkoutsPageRoutingModule } from './shoulderworkouts-routing.module';

import { ShoulderworkoutsPage } from './shoulderworkouts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoulderworkoutsPageRoutingModule
  ],
  declarations: [ShoulderworkoutsPage]
})
export class ShoulderworkoutsPageModule {}
