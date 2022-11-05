import { Injectable } from '@angular/core';
import { SOUNDS } from './data';

export interface ISound {
  label: string;
  url: string;
  source: string;
}

@Injectable({
  providedIn: 'root',
})
export class SoundsService {
  private readonly sounds: Record<number, ISound> = SOUNDS;

  public list(): ISound[] {
    return Object.values(this.sounds);
  }

  public get(index: number): ISound {
    return this.sounds[index];
  }
}
