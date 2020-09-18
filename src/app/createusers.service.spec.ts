import { TestBed } from '@angular/core/testing';

import { CreateusersService } from './createusers.service';

describe('CreateusersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateusersService = TestBed.get(CreateusersService);
    expect(service).toBeTruthy();
  });
});
