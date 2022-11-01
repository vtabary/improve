import { Injectable } from '@angular/core';
import { ARTICULATIONS } from './data';

@Injectable({
  providedIn: 'root',
})
export class ArticulationsService {
  private readonly articulations: Record<number, string> = ARTICULATIONS;

  public list(): string[] {
    return Object.values(this.articulations);
  }

  public get(index: number): string {
    return this.articulations[index];
  }
}
