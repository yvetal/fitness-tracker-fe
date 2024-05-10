import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActivityLogAddFormComponent } from './activity-log-add-form/activity-log-add-form.component';
import { ActivityLogListComponent } from "./activity-log-list/activity-log-list.component";
import { ActivityLogsComponent } from './activity-logs/activity-logs.component';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, ActivityLogsComponent]
})
export class AppComponent {
  title = 'fitness-tracker-fe';
}
