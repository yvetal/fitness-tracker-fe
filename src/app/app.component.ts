import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActivityLogListComponent } from './activity-log-list/activity-log-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ActivityLogListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fitness-tracker-fe';
}
