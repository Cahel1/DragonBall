import { TestBed } from '@angular/core/testing';

import { BlockbusterapiService } from './blockbusterapi.service';

describe('BlockbusterapiService', () => {
  let service: BlockbusterapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlockbusterapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
