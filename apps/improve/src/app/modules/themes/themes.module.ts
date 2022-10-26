import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemesRoutingModule } from './themes-routing.module';
import { RandomComponent } from './pages/random/random.component';
import { HomeComponent } from './pages/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './pages/list/list.component';
import { DatabaseModule } from '../database/database.module';

@NgModule({
  declarations: [RandomComponent, HomeComponent, ListComponent],
  imports: [
    CommonModule,
    ThemesRoutingModule,
    ReactiveFormsModule,
    DatabaseModule,
  ],
})
export class ThemesModule {}
