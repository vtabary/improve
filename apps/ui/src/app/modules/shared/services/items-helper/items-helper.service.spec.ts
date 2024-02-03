import { TestBed } from '@angular/core/testing';

import { ItemsHelperService } from './items-helper.service';

describe('ItemsHelperService', () => {
  let service: ItemsHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemsHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
