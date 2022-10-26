import { Injectable } from '@angular/core';
import { ThemesService, UsedThemesService } from '../../../database/public-api';

@Injectable({
  providedIn: 'root',
})
export class ThemesHelperService {
  private unusedIndexes: Record<string, number[]> = {};

  constructor(
    private themes: ThemesService,
    private usedThemes: UsedThemesService
  ) {}

  public random(currentClass: string): { theme: string; index: number } {
    const index = this.randomIndex(currentClass);
    return { theme: this.themes.get(index), index };
  }

  public isUsed(currentClass: string, index: number): boolean {
    const unused = this.getCachedUnused(currentClass);
    return !unused.includes(index);
  }

  public setAsUsed(currentClass: string, index: number): void {
    const unused = this.getCachedUnused(currentClass);

    // Manually remove the index to unused list
    unused.slice(unused.indexOf(index), 1);
    this.setCachedUnused(currentClass, unused);

    // Add the index to unused list in local database
    this.usedThemes.add(currentClass, index);
  }

  private randomIndex(currentClass: string): number {
    const unused = this.getCachedUnused(currentClass);
    return unused[Math.floor(Math.random() * unused.length)];
  }

  private getUnusedIndexes(currentClass: string): number[] {
    const usedIndexes: number[] = this.usedThemes.list(currentClass);
    return Array.from(this.themes.list().keys()).filter(
      (index) => !usedIndexes.includes(index)
    );
  }

  private getCachedUnused(currentClass: string): number[] {
    if (this.unusedIndexes[currentClass]) {
      return this.unusedIndexes[currentClass];
    }

    this.unusedIndexes[currentClass] =
      this.getUnusedIndexes(currentClass) || [];
    return this.unusedIndexes[currentClass];
  }

  private setCachedUnused(currentClass: string, unused: number[]): void {
    this.unusedIndexes[currentClass] = unused;
  }
}
