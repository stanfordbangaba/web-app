import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MandateSettingsStepComponent } from './mandate-settings-step.component';

describe('MandateSettingsStepComponent', () => {
  let component: MandateSettingsStepComponent;
  let fixture: ComponentFixture<MandateSettingsStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MandateSettingsStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MandateSettingsStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
