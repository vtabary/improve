import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/public-api';
import { ListComponent } from './pages/list/list.component';
import { ArticulationsRoutingModule } from './articulations-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { RandomComponent } from './pages/random/random.component';

@NgModule({
  declarations: [ListComponent, HomeComponent, RandomComponent],
  imports: [CommonModule, SharedModule, ArticulationsRoutingModule],
})
export class ArticulationsModule {}
