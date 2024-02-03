import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ISound } from '../../../database/public-api';

@Component({
  selector: 'improve-sounds-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input()
  public item: ISound | null = null;

  @Output()
  public get askPlay(): Observable<void> {
    return this.play$.asObservable();
  }

  /**
   * @internal
   */
  public play$ = new EventEmitter<void>();
}
