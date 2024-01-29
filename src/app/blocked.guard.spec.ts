import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { blockedGuard } from './blocked.guard';

describe('blockedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => blockedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
