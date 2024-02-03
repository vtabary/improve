import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {
  CurrentClassService,
  ClassesService,
} from '../../../database/public-api';

@Component({
  selector: 'improve-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  /**
   * @internal
   */
  public currentClass$: Observable<string>;
  /**
   * @internal
   */
  public classList: string[] = [];

  constructor(
    classes: ClassesService,
    private currentClass: CurrentClassService
  ) {
    this.currentClass$ = currentClass.change;
    this.classList = classes.list();
  }

  /**
   * @internal
   */
  public onSelectCurrent(item: string): void {
    this.currentClass.set(item);
  }
}
