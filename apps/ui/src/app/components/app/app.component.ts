import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { Observable, map } from 'rxjs';
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
  public cogOpened = false;
  /**
   * @internal
   */
  public currentClass$: Observable<string>;

  constructor(
    private cdr: ChangeDetectorRef,
    currentClassService: CurrentClassService
  ) {
    this.currentClass$ = currentClassService.change.pipe(
      map((value) => (value === 'default' ? 'Par défaut' : value))
    );
  }

  /**
   * @internal
   */
  public onToggleMobileMenu(): void {
    this.menuOpened = !this.menuOpened;
    this.cdr.detectChanges();
  }

  /**
   * @internal
   */
  public onToggleCogMenu(): void {
    this.cogOpened = !this.cogOpened;
    this.cdr.detectChanges();
  }
}
