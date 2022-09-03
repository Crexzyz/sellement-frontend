import { TestBed } from '@angular/core/testing';

import { BaseRestService } from './base-rest.service';

describe('AbstractRestService', () => {
  let service: BaseRestService<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
