import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleClassSubjectsComponent } from './single-class-subjects.component';

describe('SingleClassSubjectsComponent', () => {
  let component: SingleClassSubjectsComponent;
  let fixture: ComponentFixture<SingleClassSubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleClassSubjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleClassSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
