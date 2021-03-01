import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDebitOrderOperatorComponent } from './edit-debit-order-operator.component';

describe('EditDebitOrderProviderComponent', () => {
  let component: EditDebitOrderOperatorComponent;
  let fixture: ComponentFixture<EditDebitOrderOperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDebitOrderOperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDebitOrderOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
