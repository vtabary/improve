import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { SoundsService, ISound } from '../../../database/public-api';
import { AudioPlayerComponent, IAudio } from '../../../media-player/public-api';

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
  /**
   * @internal
   */
  public sources: IAudio[] = [];

  constructor(private sounds: SoundsService, private cdr: ChangeDetectorRef) {}

  /**
   * @internal
   */
  public ngOnInit(): void {
    this.list = this.sounds.list();
  }

  /**
   * @internal
   */
  public onPlay(item: ISound): void {
    this.sources = [
      {
        url: item.url,
        type: 'audio/mpeg',
      },
    ];

    this.cdr.detectChanges();
  }

  /**
   * @internal
   */
  public onSourceChange(component: AudioPlayerComponent): void {
    component.play();
  }
}
