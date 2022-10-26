import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { CurrentClassService } from '../../../database/services/current-class/current-class.service';
import { ThemesHelperService } from '../../services/themes-helper/themes-helper.service';

@Component({
  selector: 'improve-themes-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RandomComponent {
  /**
   * @internal
   */
  public theme?: string;

  constructor(
    private themes: ThemesHelperService,
    private currentClass: CurrentClassService,
    private cdr: ChangeDetectorRef
  ) {
    this.theme = this.getRandom();
  }

  public onRefresh() {
    this.theme = this.getRandom();
    this.cdr.detectChanges();
  }

  private getRandom(): string {
    const item = this.themes.random(this.currentClass.get());
    this.themes.setAsUsed(this.currentClass.get(), item.index);

    return item.theme;
  }
}
