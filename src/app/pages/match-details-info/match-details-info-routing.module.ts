import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatchDetailsInfoPage } from './match-details-info.page';

const routes: Routes = [
  {
    path: '',
    component: MatchDetailsInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatchDetailsInfoPageRoutingModule {}
