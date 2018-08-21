import { Component, OnInit, ViewChild } from '@angular/core';
import { TeamListComponent } from 'src/app/team-list/team-list.component';
import { AuthService } from 'src/app/login/auth.service';

@Component({
  selector: 'app-team-dashboard',
  templateUrl: './team-dashboard.component.html',
  styleUrls: ['./team-dashboard.component.css']
})
export class TeamDashboardComponent implements OnInit {

  // ChildView
  @ViewChild(TeamListComponent) teamList: TeamListComponent;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  addTeam(team) {
    console.log(team);
    this.teamList.teams.push(team);
  }

}
