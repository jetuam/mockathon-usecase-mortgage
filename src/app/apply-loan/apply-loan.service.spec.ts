import { TestBed } from '@angular/core/testing';

import { ApplyLoanService } from './apply-loan.service';

describe('ApplyLoanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApplyLoanService = TestBed.get(ApplyLoanService);
    expect(service).toBeTruthy();
  });
});
