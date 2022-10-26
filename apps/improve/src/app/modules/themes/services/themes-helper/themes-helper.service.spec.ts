import { TestBed } from '@angular/core/testing';

import { ThemesHelperService } from './themes-helper.service';

describe('ThemesHelperService', () => {
  let service: ThemesHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemesHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
