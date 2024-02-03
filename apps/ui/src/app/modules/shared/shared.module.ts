import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutWithButtonsComponent } from './components/layout-with-buttons/layout-with-buttons.component';
import { FeatherIconComponent } from './components/feather-icon/feather-icon.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ListComponent } from './components/list/list.component';
import { RandomComponent } from './components/random/random.component';

@NgModule({
  declarations: [
    LayoutWithButtonsComponent,
    FeatherIconComponent,
    LayoutComponent,
    ListComponent,
    RandomComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [
    LayoutWithButtonsComponent,
    FeatherIconComponent,
    LayoutComponent,
    ListComponent,
    RandomComponent,
  ],
})
export class SharedModule {}
