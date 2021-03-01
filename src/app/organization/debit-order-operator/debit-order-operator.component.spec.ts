import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitOrderOperatorComponent } from './debit-order-operator.component';

describe('DebitOrderProviderComponent', () => {
  let component: DebitOrderOperatorComponent;
  let fixture: ComponentFixture<DebitOrderOperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebitOrderOperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebitOrderOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
