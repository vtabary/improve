import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ClassesService } from '../classes/classes.service';
import { DatabaseService } from '../database/database.service';

@Injectable({
  providedIn: 'root',
})
export class CurrentClassService {
  public get change(): Observable<string> {
    return this._change.asObservable();
  }

  private readonly dbKey = 'improve.current-class';
  private _change = new BehaviorSubject(this.get());

  constructor(
    private database: DatabaseService,
    private classes: ClassesService
  ) {}

  public get(): string {
    return this.database.get(this.dbKey) || this.classes.list()[0] || 'default';
  }

  public set(currentClass?: string | null): void {
    if (!currentClass) {
      return;
    }
    this.database.set(this.dbKey, currentClass);
    this._change.next(currentClass);
  }
}
