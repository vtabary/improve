import { Component, Input } from '@angular/core';
import { ITheme } from '../../../database/public-api';

@Component({
  selector: 'improve-themes-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input()
  public item?: ITheme;

  @Input()
  public used = false;
}
