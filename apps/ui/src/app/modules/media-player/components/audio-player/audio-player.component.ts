import {
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
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
})
export class AudioPlayerComponent implements OnChanges {
  @Input()
  public sources: IAudio[] = [];

  @Output()
  public get sourceChange(): Observable<AudioPlayerComponent> {
    return this.sourceChange$.asObservable();
  }

  @ContentChild('player', { read: ElementRef })
  public player?: ElementRef<HTMLAudioElement>;

  private sourceChange$ = new EventEmitter();

  public ngOnChanges(changes: SimpleChanges): void {
    if (!changes['sources']) {
      return;
    }
    this.sourceChange$.emit(this);
  }

  public async play(): Promise<void> {
    this.player?.nativeElement.load();
    await this.player?.nativeElement.play();
  }
}
