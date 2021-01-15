import { TestBed } from '@angular/core/testing';

import { NgTinyUrlService } from './ng-tiny-url.service';

describe('NgTinyUrlService', () => {
  let service: NgTinyUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgTinyUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
