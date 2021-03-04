import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MandateDetailsStepComponent } from './mandate-details-step.component';

describe('MandateDetailsStepComponent', () => {
  let component: MandateDetailsStepComponent;
  let fixture: ComponentFixture<MandateDetailsStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MandateDetailsStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MandateDetailsStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
