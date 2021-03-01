import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankTabComponent } from './bank-tab.component';

describe('BankTabComponent', () => {
  let component: BankTabComponent;
  let fixture: ComponentFixture<BankTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
