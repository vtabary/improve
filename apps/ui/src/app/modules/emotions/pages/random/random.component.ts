import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EmotionsService } from '../../../database/public-api';
import { ItemsHelperService, ITEMS_SERVICE } from '../../../shared/public-api';

@Component({
  selector: 'improve-emotions-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ITEMS_SERVICE, useExisting: EmotionsService },
    ItemsHelperService,
  ],
})
export class RandomComponent {}
