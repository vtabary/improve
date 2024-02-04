import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Observable } from 'rxjs';

export interface IAudio {
  url: string;
  type: string;
}

@Component({
  selector: 'improve-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AudioPlayerComponent implements OnChanges {
  @Input()
  public sources: IAudio[] = [];

  @Output()
  public get sourceChange(): Observable<AudioPlayerComponent> {
    return this.sourceChange$.asObservable();
  }

  @ViewChild('player', { read: ElementRef })
  public player?: ElementRef<HTMLAudioElement>;

  private sourceChange$ = new EventEmitter();

  public ngOnChanges(changes: SimpleChanges): void {
    if (!changes['sources']) {
      return;
    }

    this.sourceChange$.emit(this);
  }

  public async play(): Promise<void> {
    if (!this.player) {
      return;
    }

    this.player.nativeElement.load();
    await this.player.nativeElement.play();
  }

  public pause(): void {
    if (!this.player) {
      return;
    }

    this.player.nativeElement.pause();
  }

  private reset(): void {
    if (!this.player) {
      return;
    }

    this.player.nativeElement.pause();
    this.player.nativeElement.currentTime = 0;
  }
}
