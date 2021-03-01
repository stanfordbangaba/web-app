import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitOrderOperatorGeneralStepComponent } from './debit-order-operator-general-step.component';

describe('DebitOrderOperatorGeneralStepComponent', () => {
  let component: DebitOrderOperatorGeneralStepComponent;
  let fixture: ComponentFixture<DebitOrderOperatorGeneralStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebitOrderOperatorGeneralStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebitOrderOperatorGeneralStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
