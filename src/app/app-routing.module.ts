import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'match-details/:id',
    loadChildren: () => import('./pages/match-details/match-details.module').then( m => m.MatchDetailsPageModule)
  },
  /*{
    path: 'match-details-info',
    loadChildren: () => import('./pages/match-details-info/match-details-info.module').then( m => m.MatchDetailsInfoPageModule)
  }*/
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
