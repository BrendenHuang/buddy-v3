import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbsworkoutsPage } from './absworkouts.page';

const routes: Routes = [
  {
    path: '',
    component: AbsworkoutsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbsworkoutsPageRoutingModule {}
