import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CategoriesService } from '../../../database/public-api';
import { ItemsHelperService, ITEMS_SERVICE } from '../../../shared/public-api';

@Component({
  selector: 'improve-categories-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ITEMS_SERVICE, useExisting: CategoriesService },
    ItemsHelperService,
  ],
})
export class RandomComponent {}
