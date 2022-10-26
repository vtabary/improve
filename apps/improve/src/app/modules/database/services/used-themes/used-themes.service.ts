import { Injectable } from '@angular/core';
import { DatabaseService } from '../database/database.service';

@Injectable({
  providedIn: 'root',
})
export class UsedThemesService {
  private readonly dbKey = 'improve.used-themes';

  constructor(private database: DatabaseService) {}

  public list(currentClass: string): number[] {
    return this.database.get(this.getDBKey(currentClass)) || [];
  }

  public add(currentClass: string, index: number): void {
    const list = this.list(currentClass);
    list.push(index);
    this.database.set(this.getDBKey(currentClass), list);
  }

  public remove(currentClass: string, index: number): void {
    const list = this.list(currentClass);
    const found = list.indexOf(index);
    if (found < 0) {
      return;
    }

    this.database.set(this.getDBKey(currentClass), list.slice(found, 1));
  }

  private getDBKey(currentClass: string): string {
    return `${this.dbKey}.${currentClass}`;
  }
}
