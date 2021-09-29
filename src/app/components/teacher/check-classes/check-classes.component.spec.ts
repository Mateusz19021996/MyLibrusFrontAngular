import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckClassesComponent } from './check-classes.component';

describe('CheckClassesComponent', () => {
  let component: CheckClassesComponent;
  let fixture: ComponentFixture<CheckClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckClassesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
