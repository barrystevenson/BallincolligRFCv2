import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatchDetailsPageRoutingModule } from './match-details-routing.module';
import { MatchDetailsPage } from './match-details.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MatchDetailsPageRoutingModule
  ],
  declarations: [MatchDetailsPage]
})
export class MatchDetailsPageModule {}
