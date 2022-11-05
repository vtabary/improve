import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutWithButtonsComponent } from './components/layout-with-buttons/layout-with-buttons.component';
import { FeatherIconComponent } from './components/feather-icon/feather-icon.component';
import { LayoutComponent } from './components/layout/layout.component';
import { RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [
    LayoutWithButtonsComponent,
    FeatherIconComponent,
    LayoutComponent,
    ListComponent,
  ],
  imports: [CommonModule, RouterModule.forChild([])],
  exports: [
    LayoutWithButtonsComponent,
    FeatherIconComponent,
    LayoutComponent,
    ListComponent,
  ],
})
export class SharedModule {}
