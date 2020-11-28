import { TestBed } from '@angular/core/testing';

import { SeoMetatagsService } from './seo-metatags.service';

describe('SeoMetatagsService', () => {
  let service: SeoMetatagsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeoMetatagsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
