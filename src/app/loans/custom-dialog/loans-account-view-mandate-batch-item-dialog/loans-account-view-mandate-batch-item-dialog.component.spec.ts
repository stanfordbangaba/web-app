import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansAccountViewMandateBatchItemDialogComponent } from './loans-account-view-mandate-batch-item-dialog.component';

describe('LoansAccountViewMandateBatchItemDialogComponent', () => {
  let component: LoansAccountViewMandateBatchItemDialogComponent;
  let fixture: ComponentFixture<LoansAccountViewMandateBatchItemDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoansAccountViewMandateBatchItemDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoansAccountViewMandateBatchItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
