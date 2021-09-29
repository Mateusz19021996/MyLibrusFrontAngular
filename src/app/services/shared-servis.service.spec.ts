import { TestBed } from '@angular/core/testing';

import { SharedServisService } from './shared-servis.service';

describe('SharedServisService', () => {
  let service: SharedServisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedServisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
