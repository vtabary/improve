import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RolesRoutingModule } from './roles-routing.module';
import { RandomComponent } from './pages/random/random.component';
import { JobsModule } from '../jobs/jobs.module';
import { EmotionsModule } from '../emotions/emotions.module';

@NgModule({
  declarations: [RandomComponent],
  imports: [
    CommonModule,
    SharedModule,
    RolesRoutingModule,
    JobsModule,
    EmotionsModule,
  ],
})
export class RolesModule {}
