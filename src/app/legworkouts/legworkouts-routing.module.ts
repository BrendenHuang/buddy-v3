import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LegworkoutsPage } from './legworkouts.page';

const routes: Routes = [
  {
    path: '',
    component: LegworkoutsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LegworkoutsPageRoutingModule {}
