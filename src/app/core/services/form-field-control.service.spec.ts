import { TestBed } from '@angular/core/testing';

import { FormFieldControlService } from './form-field-control.service';

describe('FormFieldControlService', () => {
  let service: FormFieldControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormFieldControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
