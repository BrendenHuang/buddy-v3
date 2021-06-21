import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LegworkoutsPageRoutingModule } from './legworkouts-routing.module';

import { LegworkoutsPage } from './legworkouts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LegworkoutsPageRoutingModule
  ],
  declarations: [LegworkoutsPage]
})
export class LegworkoutsPageModule {}
