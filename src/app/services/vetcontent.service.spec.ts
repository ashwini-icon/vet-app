import { TestBed } from '@angular/core/testing';

import { VetcontentService } from './vetcontent.service';

describe('VetcontentService', () => {
  let service: VetcontentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VetcontentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
