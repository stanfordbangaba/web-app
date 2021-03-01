import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitOrderOperatorBankStepComponent } from './debit-order-operator-bank-step.component';

describe('DebitOrderOperatorBankStepComponent', () => {
  let component: DebitOrderOperatorBankStepComponent;
  let fixture: ComponentFixture<DebitOrderOperatorBankStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebitOrderOperatorBankStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebitOrderOperatorBankStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
