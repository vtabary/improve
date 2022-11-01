import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/public-api';
import { DatabaseModule } from '../database/public-api';
import { ThemesRoutingModule } from './themes-routing.module';
import { RandomComponent } from './pages/random/random.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';

@NgModule({
  declarations: [RandomComponent, HomeComponent, ListComponent],
  imports: [
    CommonModule,
    ThemesRoutingModule,
    ReactiveFormsModule,
    DatabaseModule,
    SharedModule,
  ],
})
export class ThemesModule {}
