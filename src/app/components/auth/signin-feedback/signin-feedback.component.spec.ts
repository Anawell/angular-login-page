import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninFeedbackComponent } from './signin-feedback.component';

describe('SigninFeedbackComponent', () => {
  let component: SigninFeedbackComponent;
  let fixture: ComponentFixture<SigninFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
