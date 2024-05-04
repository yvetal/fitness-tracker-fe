import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActivityLogAddFormComponent } from './activity-log-add-form/activity-log-add-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ActivityLogAddFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fitness-tracker-fe';
}
