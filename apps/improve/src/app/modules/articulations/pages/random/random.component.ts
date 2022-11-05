import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import {
  ArticulationsService,
  IArticulation,
  UsedArticulationsService,
} from '../../../database/public-api';
import { CurrentClassService } from '../../../database/public-api';
import {
  ItemsHelperService,
  ITEMS_SERVICE,
  USED_SERVICE,
} from '../../../shared/public-api';

@Component({
  selector: 'improve-articulations-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ITEMS_SERVICE, useExisting: ArticulationsService },
    { provide: USED_SERVICE, useExisting: UsedArticulationsService },
    ItemsHelperService,
  ],
})
export class RandomComponent {
  /**
   * @internal
   */
  public articulation?: IArticulation;

  constructor(
    private itemsHelper: ItemsHelperService<IArticulation>,
    private currentClass: CurrentClassService,
    private cdr: ChangeDetectorRef
  ) {
    this.articulation = this.getRandom();
  }

  public onNewArticulation() {
    this.articulation = this.getRandom();
    this.cdr.detectChanges();
  }

  private getRandom(): IArticulation {
    const result = this.itemsHelper.random(this.currentClass.get());
    this.itemsHelper.setAsUsed(this.currentClass.get(), result.index);

    return result.item;
  }
}
