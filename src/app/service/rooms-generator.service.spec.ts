import { TestBed } from '@angular/core/testing';

import { RoomsGeneratorService } from './rooms-generator.service';

describe('RoomsGeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoomsGeneratorService = TestBed.get(RoomsGeneratorService);
    expect(service).toBeTruthy();
  });
});
