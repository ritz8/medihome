import { TestBed } from '@angular/core/testing';

import { Cmptlk1Service } from './cmptlk1.service';

describe('Cmptlk1Service', () => {
  let service: Cmptlk1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Cmptlk1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
