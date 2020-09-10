import { TestBed } from '@angular/core/testing';

import { AuthINGuard } from './auth-in.guard';

describe('AuthINGuard', () => {
  let guard: AuthINGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthINGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
