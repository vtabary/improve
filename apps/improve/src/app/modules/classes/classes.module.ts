import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassesRoutingModule } from './classes-routing.module';
import { AddComponent } from './pages/add/add.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddComponent],
  imports: [CommonModule, ClassesRoutingModule, ReactiveFormsModule],
})
export class ClassesModule {}
