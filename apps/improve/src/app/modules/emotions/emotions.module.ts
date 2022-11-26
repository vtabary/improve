import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ItemComponent } from './components/item/item.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { RandomComponent } from './pages/random/random.component';
import { EmoitionsRoutingModule } from './emotions-routing.module';

@NgModule({
  declarations: [ItemComponent, HomeComponent, ListComponent, RandomComponent],
  imports: [CommonModule, SharedModule, EmoitionsRoutingModule],
})
export class EmotionsModule {}
