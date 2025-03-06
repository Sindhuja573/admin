import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleCategoriesComponentComponent } from './role-categories-component.component';

describe('RoleCategoriesComponentComponent', () => {
  let component: RoleCategoriesComponentComponent;
  let fixture: ComponentFixture<RoleCategoriesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoleCategoriesComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoleCategoriesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
