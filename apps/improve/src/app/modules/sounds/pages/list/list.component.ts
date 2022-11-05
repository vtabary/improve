import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SoundsService, ISound } from '../../../database/public-api';

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
  public list: ISound[] = [];

  constructor(private sounds: SoundsService) {}

  public ngOnInit(): void {
    this.list = this.sounds.list();
  }
}
