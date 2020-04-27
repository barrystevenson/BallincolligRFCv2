import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatchDetailsInfoPageRoutingModule } from './match-details-info-routing.module';

import { MatchDetailsInfoPage } from './match-details-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatchDetailsInfoPageRoutingModule
  ],
  declarations: [MatchDetailsInfoPage]
})
export class MatchDetailsInfoPageModule {}
