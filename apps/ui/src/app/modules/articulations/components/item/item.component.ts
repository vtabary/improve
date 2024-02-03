import { Component, Input } from '@angular/core';
import { IArticulation } from '../../../database/public-api';

@Component({
  selector: 'improve-articulation-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input()
  public item?: IArticulation;

  @Input()
  public used = false;
}
