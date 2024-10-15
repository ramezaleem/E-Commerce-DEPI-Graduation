import { TestBed } from '@angular/core/testing';

import { AboutServiceService } from './about-service.service';

describe('AboutServiceService', () => {
  let service: AboutServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
