import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDebitOrderOperatorComponent } from './view-debit-order-operator.component';

describe('ViewDebitOrderProviderComponent', () => {
  let component: ViewDebitOrderOperatorComponent;
  let fixture: ComponentFixture<ViewDebitOrderOperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDebitOrderOperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDebitOrderOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
