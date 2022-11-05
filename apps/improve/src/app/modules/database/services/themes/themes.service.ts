import { Injectable } from '@angular/core';
import { THEMES } from './data';

export interface ITheme {
  theme: string;
  source: string;
}

@Injectable({
  providedIn: 'root',
})
export class ThemesService {
  private readonly themes: Record<number, ITheme> = THEMES;

  public list(): ITheme[] {
    return Object.values(this.themes);
  }

  public get(index: number): ITheme {
    return this.themes[index];
  }
}
