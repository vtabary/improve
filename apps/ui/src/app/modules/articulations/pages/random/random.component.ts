import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ArticulationsService,
  UsedArticulationsService,
} from '../../../database/public-api';
import { ITEMS_SERVICE, USED_SERVICE } from '../../../shared/public-api';

@Component({
  selector: 'improve-articulations-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ITEMS_SERVICE, useExisting: ArticulationsService },
    { provide: USED_SERVICE, useExisting: UsedArticulationsService },
  ],
})
export class RandomComponent {}
