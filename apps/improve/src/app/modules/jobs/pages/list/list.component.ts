import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  IJob,
  JobsService,
} from '../../../database/services/jobs/jobs.service';

@Component({
  selector: 'improve-themes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit {
  /**
   * @internal
   */
  public list: IJob[] = [];

  constructor(private jobs: JobsService) {}

  /**
   * @internal
   */
  public ngOnInit(): void {
    this.list = this.jobs.list();
  }
}
