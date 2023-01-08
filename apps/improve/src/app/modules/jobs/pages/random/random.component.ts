import { ChangeDetectionStrategy, Component } from '@angular/core';
import { JobsService } from '../../../database/public-api';
import { ITEMS_SERVICE } from '../../../shared/public-api';

@Component({
  selector: 'improve-role-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ITEMS_SERVICE, useExisting: JobsService }],
})
export class RandomComponent {}
