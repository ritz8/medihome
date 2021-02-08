import { TestBed } from '@angular/core/testing';

import { CmptlkService } from './cmptlk.service';

describe('CmptlkService', () => {
  let service: CmptlkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CmptlkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
