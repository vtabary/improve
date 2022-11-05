import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { CategoriesService, ICategory } from '../../../database/public-api';
import { CurrentClassService } from '../../../database/public-api';
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
export class RandomComponent {
  /**
   * @internal
   */
  public category?: ICategory;

  constructor(
    private itemsHelper: ItemsHelperService<ICategory>,
    private currentClass: CurrentClassService,
    private cdr: ChangeDetectorRef
  ) {
    this.category = this.getRandom();
  }

  public onNewCategory() {
    this.category = this.getRandom();
    this.cdr.detectChanges();
  }

  private getRandom(): ICategory {
    const result = this.itemsHelper.random(this.currentClass.get());
    return result.item;
  }
}
