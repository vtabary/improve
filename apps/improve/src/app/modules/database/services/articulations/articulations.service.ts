import { Injectable } from '@angular/core';
import { ARTICULATIONS } from './data';

export interface IArticulation {
  phrase: string;
  source: string;
}

@Injectable({
  providedIn: 'root',
})
export class ArticulationsService {
  private readonly articulations: Record<number, IArticulation> = ARTICULATIONS;

  public list(): IArticulation[] {
    return Object.values(this.articulations);
  }

  public get(index: number): IArticulation {
    return this.articulations[index];
  }
}
