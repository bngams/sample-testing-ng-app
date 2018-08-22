import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TeamListComponent } from './team-list.component';
import { TeamService } from 'src/app/services/team.service';
import { HttpModule } from '@angular/http';

describe('TeamListComponent', () => {
  let component: TeamListComponent;
  let fixture: ComponentFixture<TeamListComponent>;
  let teamServiceSpy = jasmine.createSpyObj('TeamService', ['getAll']);
  let getAllSpy: jasmine.Spy;
  const teams = [{ country: 'Fr', slogan: 'go!' }];

  beforeEach(() => {

    getAllSpy = teamServiceSpy.getAll.and.returnValue(Promise.resolve(teams));

    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [TeamListComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: TeamService, useValue: teamServiceSpy }
      ]
    });

    fixture = TestBed.createComponent(TeamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get all teams', (done: DoneFn) => {   
    getAllSpy.calls.mostRecent().returnValue.then(() => {
      expect(component.teams).toEqual(teams);
      done();
    });
  });
  
});
