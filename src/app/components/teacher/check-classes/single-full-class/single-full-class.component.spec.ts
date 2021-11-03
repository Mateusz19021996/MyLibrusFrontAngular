import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFullClassComponent } from './single-full-class.component';

describe('SingleFullClassComponent', () => {
  let component: SingleFullClassComponent;
  let fixture: ComponentFixture<SingleFullClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleFullClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleFullClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
