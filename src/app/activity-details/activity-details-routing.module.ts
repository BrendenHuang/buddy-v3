import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivityDetailsPage } from './activity-details.page';

const routes: Routes = [
  {
    path: '',
    component: ActivityDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivityDetailsPageRoutingModule {}
