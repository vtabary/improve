import { Injectable } from '@angular/core';
import { THEMES } from './data';

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
