import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TeamService } from './../services/team.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.css']
})
export class TeamFormComponent implements OnInit {
  @Output() out = new EventEmitter<any>();
  observer: any;

  team: any = {
    country: '',
    slogan: ''
  };

  constructor(private teamService: TeamService) { }

  ngOnInit() {
  }

  submit() {
    this.out.emit(this.team);
  }

  onKey(value) {
    console.log(value);
    this.observer = this.teamService.searchByCountry(value).subscribe(data => {
      console.log(data.json());
    });
  }

}
