import { Injectable } from '@angular/core';
import { CATEGORIES } from './data';

export interface ICategory {
  label: string;
  description: string;
  source: string;
}

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private readonly categories: Record<number, ICategory> = CATEGORIES;

  public list(): ICategory[] {
    return Object.values(this.categories);
  }

  public get(index: number): ICategory {
    return this.categories[index];
  }
}
