// library modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// npm modules

// custom modules
import { MaterialModule } from './material.module';
import { UtilsModule } from './utils/utils.module';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { SecurityModule } from './security/security.module';

// custom services
import { TeamService } from 'src/app/services/team.service';

// directives and pipes
import { ModerationPipe } from './pipes/moderation.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { WarningDirective } from './directives/warning.directive';

// components
import { AppComponent } from './app.component';
import { TeamFormComponent } from './team-form/team-form.component';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamCardComponent } from './team-card/team-card.component';
import { TeamDashboardComponent } from './team-dashboard/team-dashboard.component';
import { SettingsComponent } from './settings/settings.component';

// i18n
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';
// load built in angular translations 
registerLocaleData(localeFr, 'fr', localeFrExtra);

@NgModule({
  declarations: [
    AppComponent,
    TeamFormComponent,
    TeamListComponent,
    TeamCardComponent,
    TeamDashboardComponent,
    ModerationPipe,
    HighlightDirective,
    WarningDirective,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MaterialModule,
    UtilsModule,
    LoginModule.forRoot(),
    SecurityModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' },
    TeamService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
