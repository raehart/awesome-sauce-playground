import { TestBed } from '@angular/core/testing';

import { GamesService } from './games.service';
import { Apollo } from 'apollo-angular';

describe('GamesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ Apollo ]
  }));

  it('should be created', () => {
    const service: GamesService = TestBed.get(GamesService);
    expect(service).toBeTruthy();
  });
});
