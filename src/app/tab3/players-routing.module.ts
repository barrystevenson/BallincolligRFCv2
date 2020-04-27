import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersPage } from './players.page';

const routes: Routes = [
  {
    path: '',
    component: PlayersPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayersPageRoutingModule {}
