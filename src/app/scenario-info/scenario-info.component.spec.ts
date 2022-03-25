import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ScenarioInfoComponent } from './scenario-info.component';

describe('ScenarioInfoComponent', () => {
  let component: ScenarioInfoComponent;
  let fixture: ComponentFixture<ScenarioInfoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenarioInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenarioInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
