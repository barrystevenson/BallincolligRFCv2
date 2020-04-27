import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchDetailsPage } from './match-details.page';

const routes: Routes = [
  {
    path: 'match-details',
    component: MatchDetailsPage,
    children: [
      {
        path: 'match-details-info/:id',
          loadChildren: () => import('../match-details-info/match-details-info.module').then(m => m.MatchDetailsInfoPageModule)
      },
      /*{
        path: 'players',
        loadChildren: () => import('../tab3/players.module').then(m => m.PlayersPageModule)
      },*/
      {
        path: '',
        redirectTo: '/match-details/match-details-info',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
redirectTo: '/match-details/match-details-info',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchDetailsPageRoutingModule {}
