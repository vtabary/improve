import { Component, Input } from '@angular/core';
import { IJob } from '../../../database/services/jobs/jobs.service';

@Component({
  selector: 'improve-role-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input()
  public item?: IJob;
}
