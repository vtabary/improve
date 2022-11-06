import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  TemplateRef,
} from '@angular/core';
import { CurrentClassService } from '../../../database/public-api';
import { ItemsHelperService } from '../../services/items-helper/items-helper.service';

@Component({
  selector: 'improve-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ItemsHelperService],
})
export class RandomComponent<T> {
  @ContentChild('item', { read: TemplateRef })
  public itemComponent?: TemplateRef<any>;

  /**
   * @internal
   */
  public item?: T;

  constructor(
    private itemsHelper: ItemsHelperService<T>,
    private currentClass: CurrentClassService,
    private cdr: ChangeDetectorRef
  ) {
    this.item = this.getRandom();
  }

  public onNewItem() {
    this.item = this.getRandom();
    this.cdr.detectChanges();
  }

  private getRandom(): T {
    const result = this.itemsHelper.random(this.currentClass.get());
    this.itemsHelper.setAsUsed(this.currentClass.get(), result.index);

    return result.item;
  }
}
