import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BackworkoutsPage } from './backworkouts.page';

const routes: Routes = [
  {
    path: '',
    component: BackworkoutsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackworkoutsPageRoutingModule {}
