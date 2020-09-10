import { TestBed } from '@angular/core/testing';

import { AuthHomeGuard } from './auth-home.guard';

describe('AuthHomeGuard', () => {
  let guard: AuthHomeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthHomeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
