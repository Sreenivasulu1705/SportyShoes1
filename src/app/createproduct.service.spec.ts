import { TestBed } from '@angular/core/testing';

import { CreateproductService } from './createproduct.service';

describe('CreateproductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateproductService = TestBed.get(CreateproductService);
    expect(service).toBeTruthy();
  });
});
