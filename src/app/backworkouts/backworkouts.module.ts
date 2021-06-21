import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BackworkoutsPageRoutingModule } from './backworkouts-routing.module';

import { BackworkoutsPage } from './backworkouts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BackworkoutsPageRoutingModule
  ],
  declarations: [BackworkoutsPage]
})
export class BackworkoutsPageModule {}
