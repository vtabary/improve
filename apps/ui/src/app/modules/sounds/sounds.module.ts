import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MediaPlayerModule } from '../media-player/media-player.module';
import { ListComponent } from './pages/list/list.component';
import { ItemComponent } from './components/item/item.component';
import { SoundsRoutingModule } from './sounds-routing.module';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [ListComponent, ItemComponent, HomeComponent],
  imports: [CommonModule, SharedModule, SoundsRoutingModule, MediaPlayerModule],
})
export class SoundsModule {}
