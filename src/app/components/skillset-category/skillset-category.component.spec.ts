import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsetCategoryComponent } from './skillset-category.component';

describe('SkillsetCategoryComponent', () => {
  let component: SkillsetCategoryComponent;
  let fixture: ComponentFixture<SkillsetCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkillsetCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillsetCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
