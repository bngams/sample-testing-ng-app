import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TeamListComponent } from './team-list.component';
import { TeamService } from '../services/team.service';
import { HttpModule } from '@angular/http';

class MockTeamService {
  teams = [{ country: 'Fr', slogan: 'go!' }];
  getAll(): Promise<any> {
    return new Promise((resolve, reject) => resolve(this.teams))
  }
};


describe('TeamListComponent', () => {
  let component: TeamListComponent;
  let fixture: ComponentFixture<TeamListComponent>;
  let teamServiceSpy = jasmine.createSpyObj('TeamService', ['getAll']);
  const teams = [{ country: 'Fr', slogan: 'go!' }];
  let getAllSpy: jasmine.Spy;

  beforeEach(() => {
    const teamService = jasmine.createSpyObj('TeamService', ['getAll']);
    getAllSpy = teamService.getAll.and.returnValue(new Promise((resolve, reject) => resolve(teams)));

    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [TeamListComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: TeamService, useValue: teamService }
      ]
    });

    fixture = TestBed.createComponent(TeamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get all teams', () => {
    expect(component).toBeTruthy();
    component.getAll();
    expect(component.teams[0]).toEqual(teams[0]);
  });
});
