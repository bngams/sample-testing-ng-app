import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamDashboardComponent } from './team-dashboard/team-dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { UserGuard } from './security/guards/user.guard';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: TeamDashboardComponent },
  { path: 'settings', component: SettingsComponent, canActivate: [UserGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
