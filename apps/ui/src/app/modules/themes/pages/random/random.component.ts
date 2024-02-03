import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThemesService, UsedThemesService } from '../../../database/public-api';
import { ITEMS_SERVICE, USED_SERVICE } from '../../../shared/public-api';

@Component({
  selector: 'improve-themes-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ITEMS_SERVICE, useExisting: ThemesService },
    { provide: USED_SERVICE, useExisting: UsedThemesService },
  ],
})
export class RandomComponent {}
