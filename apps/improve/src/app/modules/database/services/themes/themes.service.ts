import { Injectable } from '@angular/core';
import * as THEMES from './data.json';

@Injectable({
  providedIn: 'root',
})
export class ThemesService {
  private readonly themes: Record<number, string> = THEMES;

  public list(): string[] {
    return Object.values(this.themes);
  }

  public get(index: number): string {
    return this.themes[index];
  }
}
