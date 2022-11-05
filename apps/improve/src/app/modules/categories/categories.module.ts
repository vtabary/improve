import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { RandomComponent } from './pages/random/random.component';
import { CategoriesRoutingModule } from './categories-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ItemComponent } from './components/item/item.component';

@NgModule({
  declarations: [HomeComponent, ListComponent, RandomComponent, ItemComponent],
  imports: [CommonModule, SharedModule, CategoriesRoutingModule],
})
export class CategoriesModule {}
