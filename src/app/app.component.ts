import { Component } from '@angular/core';
import { FR } from './locale/fr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  dateNow = new Date();
  fr = FR;
}
