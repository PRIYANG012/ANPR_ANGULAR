import { TestBed } from '@angular/core/testing';

import { LivevehiclesService } from './livevehicles.service';

describe('LivevehiclesService', () => {
  let service: LivevehiclesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivevehiclesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
