import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';

export interface IItemsService<T> {
  list: () => T[];
  get: (index: number) => T;
}

export interface IUsedService {
  add: (currentClass: string, item: number) => void;
  list: (currentClass: string) => number[];
}

export const ITEMS_SERVICE = new InjectionToken<IItemsService<unknown>>(
  'items-service'
);
export const USED_SERVICE = new InjectionToken<IUsedService>('used-service');

@Injectable()
export class ItemsHelperService<T = unknown> {
  private unusedIndexes: Record<string, number[]> = {};

  constructor(
    @Inject(ITEMS_SERVICE)
    private items: IItemsService<T>,
    @Optional()
    @Inject(USED_SERVICE)
    private used: IUsedService | undefined
  ) {}

  public random(currentClass: string): { item: T; index: number } {
    const index = this.randomIndex(currentClass);
    return { item: this.items.get(index), index };
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
    this.used?.add(currentClass, index);
  }

  private randomIndex(currentClass: string): number {
    const unused = this.getCachedUnused(currentClass);
    return unused[Math.floor(Math.random() * unused.length)];
  }

  private getUnusedIndexes(currentClass: string): number[] {
    const usedIndexes: number[] = this.used?.list(currentClass) || [];
    return Array.from(this.items.list().keys()).filter(
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
