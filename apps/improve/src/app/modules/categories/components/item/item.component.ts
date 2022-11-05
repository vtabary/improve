import { Component, Input } from '@angular/core';
import { ICategory } from '../../../database/public-api';

@Component({
  selector: 'improve-categories-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input()
  public item: ICategory | null = null;
}
