import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MandatePreviewStepComponent } from './mandate-preview-step.component';

describe('MandatePreviewStepComponent', () => {
  let component: MandatePreviewStepComponent;
  let fixture: ComponentFixture<MandatePreviewStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MandatePreviewStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MandatePreviewStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
