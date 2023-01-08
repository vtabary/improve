import { Injectable } from '@angular/core';
import { JOBS } from './data';

export interface IJob {
  job: string;
  description?: string;
  domain?: string;
  source?: string;
  link?: string;
}

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  private readonly jobs: Record<number, IJob> = JOBS;

  public list(): IJob[] {
    return Object.values(this.jobs);
  }

  public get(index: number): IJob {
    return this.jobs[index];
  }
}
