import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  public get<T>(key: string): T | null {
    const data = localStorage.getItem(key);
    if (!data) {
      return null;
    }

    return JSON.parse(data);
  }

  public set<T>(key: string, data: T): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  public delete(key: string): void {
    localStorage.removeItem(key);
  }
}
