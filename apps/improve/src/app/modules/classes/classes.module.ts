import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassesRoutingModule } from './classes-routing.module';
import { AddComponent } from './pages/add/add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ListComponent } from './pages/list/list.component';

@NgModule({
  declarations: [AddComponent, ListComponent],
  imports: [
    CommonModule,
    ClassesRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class ClassesModule {}
