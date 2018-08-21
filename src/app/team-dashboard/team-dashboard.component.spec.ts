import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamDashboardComponent } from './team-dashboard.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('TeamDashboardComponent', () => {
  let component: TeamDashboardComponent;
  let fixture: ComponentFixture<TeamDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamDashboardComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
