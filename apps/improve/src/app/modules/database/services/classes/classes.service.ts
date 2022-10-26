import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DatabaseService } from '../database/database.service';

@Injectable({
  providedIn: 'root',
})
export class ClassesService {
  public get change(): Observable<string[]> {
    return this._change.asObservable();
  }

  private readonly dbKey = 'improve.classes';
  private _change = new BehaviorSubject(this.list());

  constructor(private database: DatabaseService) {}

  public list(): string[] {
    return this.database.get(this.dbKey) || [];
  }

  public add(label: string): void {
    const list = this.list();

    // Labels must be uniques
    if (list.includes(label)) {
      return;
    }

    list.push(label);
    this.database.set(this.dbKey, list);
  }

  public remove(label: string): void {
    const list = this.list();
    const found = list.indexOf(label);
    if (found < 0) {
      return;
    }

    this.database.set(this.dbKey, list.slice(found, 1));
  }
}
