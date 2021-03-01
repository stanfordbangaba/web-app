import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitOrderOperatorPreviewStepComponent } from './debit-order-operator-preview-step.component';

describe('DebitOrderOperatorPreviewStepComponent', () => {
  let component: DebitOrderOperatorPreviewStepComponent;
  let fixture: ComponentFixture<DebitOrderOperatorPreviewStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebitOrderOperatorPreviewStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebitOrderOperatorPreviewStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
