import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MandateSettingsTabComponent } from './mandate-settings-tab.component';

describe('MandateSettingsTabComponent', () => {
  let component: MandateSettingsTabComponent;
  let fixture: ComponentFixture<MandateSettingsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MandateSettingsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MandateSettingsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
