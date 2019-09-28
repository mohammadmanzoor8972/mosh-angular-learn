/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthorserviceService } from './authorservice.service';

describe('AuthorserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthorserviceService]
    });
  });

  it('should ...', inject([AuthorserviceService], (service: AuthorserviceService) => {
    expect(service).toBeTruthy();
  }));
});
