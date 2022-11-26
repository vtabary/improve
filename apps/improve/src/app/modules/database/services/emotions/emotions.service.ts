import { Injectable } from '@angular/core';
import { EMOTIONS } from './data';

export interface IEmotion {
  emotion: string;
  categories: (
    | 'Colère'
    | 'Jalousie / Envie'
    | 'Honte'
    | 'Dégoût'
    | 'Peur'
    | 'Tristesse'
    | 'Surprise'
    | 'Joie'
    | 'Amour'
  )[];
}

@Injectable({
  providedIn: 'root',
})
export class EmotionsService {
  private readonly emotions: Record<number, IEmotion> = EMOTIONS;

  public list(): IEmotion[] {
    return Object.values(this.emotions);
  }

  public get(index: number): IEmotion {
    return this.emotions[index];
  }
}
