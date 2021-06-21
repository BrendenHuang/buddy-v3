import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoulderworkoutsPage } from './shoulderworkouts.page';

const routes: Routes = [
  {
    path: '',
    component: ShoulderworkoutsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoulderworkoutsPageRoutingModule {}
