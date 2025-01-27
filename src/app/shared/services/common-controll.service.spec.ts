import { TestBed } from '@angular/core/testing';

import { CommonControllService } from './common-controll.service';

describe('CommonControllService', () => {
  let service: CommonControllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonControllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
