import { TestBed } from '@angular/core/testing';

import { SkillsetCategoryService } from './skillset-category.service';

describe('SkillsetCategoryService', () => {
  let service: SkillsetCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillsetCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
