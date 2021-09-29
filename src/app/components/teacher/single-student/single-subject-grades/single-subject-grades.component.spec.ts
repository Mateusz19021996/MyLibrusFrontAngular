import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSubjectGradesComponent } from './single-subject-grades.component';

describe('SingleSubjectGradesComponent', () => {
  let component: SingleSubjectGradesComponent;
  let fixture: ComponentFixture<SingleSubjectGradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleSubjectGradesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSubjectGradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
