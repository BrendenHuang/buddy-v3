import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArmsworkoutsPageRoutingModule } from './armsworkouts-routing.module';

import { ArmsworkoutsPage } from './armsworkouts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArmsworkoutsPageRoutingModule
  ],
  declarations: [ArmsworkoutsPage]
})
export class ArmsworkoutsPageModule {}
