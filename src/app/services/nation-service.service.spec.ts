import { TestBed } from '@angular/core/testing';

import { NationServiceService } from './nation-service.service';

describe('NationServiceService', () => {
  let service: NationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
