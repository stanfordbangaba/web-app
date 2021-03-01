import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDebitOrderOperatorComponent } from './create-debit-order-operator.component';

describe('CreateProviderComponent', () => {
  let component: CreateDebitOrderOperatorComponent;
  let fixture: ComponentFixture<CreateDebitOrderOperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDebitOrderOperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDebitOrderOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
