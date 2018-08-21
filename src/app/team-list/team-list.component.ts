import { Component, OnInit } from '@angular/core';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  public teams = new Array();

  constructor(private teamService: TeamService) { }

  ngOnInit() {

    this.getAll();
    // this.teamService.getAllObservable().subscribe(data => {
    //   this.teams = data.json();
    // });
  }

  getAll() {
    this.teamService.getAll()
      .then(data => {
        this.teams = data;
      });
  }

}


