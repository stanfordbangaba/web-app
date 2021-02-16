import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMandatesComponent } from './view-mandates.component';

describe('ViewMandatesComponent', () => {
  let component: ViewMandatesComponent;
  let fixture: ComponentFixture<ViewMandatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMandatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMandatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
