import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'tab5',
    loadChildren: () => import('./tab5/tab5.module').then( m => m.Tab5PageModule)
  },
  {
    path: 'activity-details',
    loadChildren: () => import('./activity-details/activity-details.module').then( m => m.ActivityDetailsPageModule)
  },
  {
    path: 'chestworkouts',
    loadChildren: () => import('./chestworkouts/chestworkouts.module').then( m => m.ChestworkoutsPageModule)
  },
  
  {
    path: 'absworkouts',
    loadChildren: () => import('./absworkouts/absworkouts.module').then( m => m.AbsworkoutsPageModule)
  },
  {
    path: 'legworkouts',
    loadChildren: () => import('./legworkouts/legworkouts.module').then( m => m.LegworkoutsPageModule)
  },
  {
    path: 'armsworkouts',
    loadChildren: () => import('./armsworkouts/armsworkouts.module').then( m => m.ArmsworkoutsPageModule)
  },
  {
    path: 'shoulderworkouts',
    loadChildren: () => import('./shoulderworkouts/shoulderworkouts.module').then( m => m.ShoulderworkoutsPageModule)
  },
  {
    path: 'backworkouts',
    loadChildren: () => import('./backworkouts/backworkouts.module').then( m => m.BackworkoutsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
