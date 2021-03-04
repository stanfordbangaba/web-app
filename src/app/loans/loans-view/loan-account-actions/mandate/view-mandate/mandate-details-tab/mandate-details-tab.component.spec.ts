import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MandateDetailsTabComponent } from './mandate-details-tab.component';

describe('MandateDetailsTabComponent', () => {
  let component: MandateDetailsTabComponent;
  let fixture: ComponentFixture<MandateDetailsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MandateDetailsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MandateDetailsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
