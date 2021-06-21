import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChestworkoutsPage } from './chestworkouts.page';

const routes: Routes = [
  {
    path: '',
    component: ChestworkoutsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChestworkoutsPageRoutingModule {}
