import { TestBed } from '@angular/core/testing';

import { ArticulationsService } from './articulations.service';

describe('ArticulationsService', () => {
  let service: ArticulationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticulationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
