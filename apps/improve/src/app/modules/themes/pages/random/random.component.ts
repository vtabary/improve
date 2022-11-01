import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import {
  ThemesService,
  UsedThemesService,
  CurrentClassService,
} from '../../../database/public-api';
import {
  ItemsHelperService,
  ITEMS_SERVICE,
  USED_SERVICE,
} from '../../../shared/public-api';

@Component({
  selector: 'improve-themes-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ITEMS_SERVICE, useExisting: ThemesService },
    { provide: USED_SERVICE, useExisting: UsedThemesService },
    ItemsHelperService,
  ],
})
export class RandomComponent {
  /**
   * @internal
   */
  public theme?: string;

  constructor(
    private itemsHelper: ItemsHelperService,
    private currentClass: CurrentClassService,
    private cdr: ChangeDetectorRef
  ) {
    this.theme = this.getRandom();
  }

  public onNewTheme() {
    this.theme = this.getRandom();
    this.cdr.detectChanges();
  }

  private getRandom(): string {
    const result = this.itemsHelper.random(this.currentClass.get());
    this.itemsHelper.setAsUsed(this.currentClass.get(), result.index);

    return result.item;
  }
}