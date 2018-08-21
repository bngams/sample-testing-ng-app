import { TestBed, inject } from '@angular/core/testing';

import { TeamService } from './team.service';
import { HttpModule } from '@angular/http';

describe('TeamService', () => {
  let httpSpy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [TeamService]
    });
    httpSpy = jasmine.createSpyObj('Http', ['get']);
  });

  it('should be created', inject([TeamService], (service: TeamService) => {
    expect(service).toBeTruthy();
  }));

  it('should return all teams', inject([TeamService], (service: TeamService) => {
    const teams = [{ country: 'Fr', slogan: 'go!' }];
    httpSpy.get.and.returnValue(teams);
    service.getAll().then(data => {
      expect(data[0]).toEqual(teams[0]);
    });
  }));
});
