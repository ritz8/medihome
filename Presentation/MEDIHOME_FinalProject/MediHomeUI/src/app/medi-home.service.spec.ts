import { TestBed } from '@angular/core/testing';

import { MediHomeService } from './medi-home.service';

describe('MediHomeService', () => {
  let service: MediHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
