import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutWithButtonsComponent } from './components/layout-with-buttons/layout-with-buttons.component';
import { FeatherIconComponent } from './components/feather-icon/feather-icon.component';

@NgModule({
  declarations: [LayoutWithButtonsComponent, FeatherIconComponent],
  imports: [CommonModule],
  exports: [LayoutWithButtonsComponent, FeatherIconComponent],
})
export class SharedModule {}
