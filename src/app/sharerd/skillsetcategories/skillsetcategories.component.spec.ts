import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsetcategoriesComponent } from './skillsetcategories.component';

describe('SkillsetcategoriesComponent', () => {
  let component: SkillsetcategoriesComponent;
  let fixture: ComponentFixture<SkillsetcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkillsetcategoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillsetcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
