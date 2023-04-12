import { TestBed } from '@angular/core/testing';

import { MemoryCompanyService } from './memory-company.service';

describe('MemoryCompanyService', () => {
  let service: MemoryCompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemoryCompanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
