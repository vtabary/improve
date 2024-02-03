import { TestBed } from '@angular/core/testing';

import { UsedArticulationsService } from './used-articulations.service';

describe('UsedArticulationsService', () => {
  let service: UsedArticulationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsedArticulationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
