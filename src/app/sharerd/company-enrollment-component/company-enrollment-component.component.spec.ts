import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyEnrollmentComponentComponent } from './company-enrollment-component.component';

describe('CompanyEnrollmentComponentComponent', () => {
  let component: CompanyEnrollmentComponentComponent;
  let fixture: ComponentFixture<CompanyEnrollmentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompanyEnrollmentComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompanyEnrollmentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
