import { Component, Input } from '@angular/core';
import { IEmotion } from '../../../database/public-api';

@Component({
  selector: 'improve-emotions-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input()
  public item?: IEmotion | null = null;
}
