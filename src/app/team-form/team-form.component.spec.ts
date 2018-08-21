import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamFormComponent } from './team-form.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TeamService } from './../services/team.service';
import { Observable, of } from 'rxjs';

class MockTeamService {
  searchByCountry(): Observable<any> {
    return of([{'id':1, 'country':'france'}])
  }
};

describe('TeamFormComponent', () => {
  let component: TeamFormComponent;
  let fixture: ComponentFixture<TeamFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ TeamFormComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: TeamService, useClass: MockTeamService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
