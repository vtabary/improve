import { Injectable } from '@angular/core';
import { IResource, RESOURCES } from './data';

@Injectable({
  providedIn: 'root',
})
export class ResourcesService {
  private readonly resources: Record<number, IResource> = RESOURCES;

  public list(): IResource[] {
    return Object.values(this.resources);
  }

  public get(index: number): IResource {
    return this.resources[index];
  }
}
