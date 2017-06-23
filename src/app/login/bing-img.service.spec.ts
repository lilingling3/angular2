/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BingImgService } from './bing-img.service';

describe('Service: BingImg', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BingImgService]
    });
  });

  it('should ...', inject([BingImgService], (service: BingImgService) => {
    expect(service).toBeTruthy();
  }));
});