import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { JobsRoutingModule } from './jobs-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { RandomComponent } from './pages/random/random.component';
import { ItemComponent } from './components/item/item.component';
import { ListComponent } from './pages/list/list.component';

@NgModule({
  declarations: [HomeComponent, RandomComponent, ListComponent, ItemComponent],
  imports: [CommonModule, SharedModule, JobsRoutingModule],
})
export class JobsModule {}
