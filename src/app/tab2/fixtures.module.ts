import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FixturesPage } from './fixtures.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { FixturesPageRoutingModule } from './fixtures-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    FixturesPageRoutingModule
  ],
  declarations: [FixturesPage]
})
export class FixturesPageModule {}
