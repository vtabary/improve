import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentClassService } from '../../modules/database/public-api';

@Component({
  selector: 'improve-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  /**
   * @internal
   */
  public menuOpened = false;
  /**
   * @internal
   */
  public currentClass$: Observable<string>;

  constructor(
    private cdr: ChangeDetectorRef,
    currentClassService: CurrentClassService
  ) {
    this.currentClass$ = currentClassService.change;
  }

  /**
   * @internal
   */
  public onToggleMenu(): void {
    this.menuOpened = !this.menuOpened;
    this.cdr.detectChanges();
  }
}
