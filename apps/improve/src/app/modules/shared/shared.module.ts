import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutWithButtonsComponent } from './components/layout-with-buttons/layout-with-buttons.component';
import { FeatherIconComponent } from './components/feather-icon/feather-icon.component';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [
    LayoutWithButtonsComponent,
    FeatherIconComponent,
    LayoutComponent,
  ],
  imports: [CommonModule],
  exports: [LayoutWithButtonsComponent, FeatherIconComponent, LayoutComponent],
})
export class SharedModule {}
