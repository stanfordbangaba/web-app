import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MandateBatchItemsComponent } from './mandate-batch-items.component';

describe('MandateBatchItemsComponent', () => {
  let component: MandateBatchItemsComponent;
  let fixture: ComponentFixture<MandateBatchItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MandateBatchItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MandateBatchItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
