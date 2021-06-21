import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbsworkoutsPageRoutingModule } from './absworkouts-routing.module';

import { AbsworkoutsPage } from './absworkouts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbsworkoutsPageRoutingModule
  ],
  declarations: [AbsworkoutsPage]
})
export class AbsworkoutsPageModule {}
