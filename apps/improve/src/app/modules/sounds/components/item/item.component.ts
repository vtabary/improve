import { Component, Input } from '@angular/core';
import { ISound } from '../../../database/public-api';

@Component({
  selector: 'improve-sounds-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input()
  public item: ISound | null = null;
}
