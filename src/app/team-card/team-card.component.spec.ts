import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamCardComponent } from './team-card.component';
// bypass elements declaration in Testbed
import { Pipe, Directive, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// load directive
import { WarningDirective } from '../directives/warning.directive';

// stub pipe
@Pipe({ name: 'moderation' })
class ModerationPipe {
  transform(value: string): string {
      return value;
  }
}

describe('TeamCardComponent', () => {
  let component: TeamCardComponent;
  let fixture: ComponentFixture<TeamCardComponent>;
  // mock the hero supplied by the parent component
  let expectedCard = { id: 42, slogan: 'Slogan', country: 'Country' };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamCardComponent, ModerationPipe, WarningDirective ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamCardComponent);
    component = fixture.componentInstance;
    component.team = expectedCard;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
