import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActivityLogAddFormComponent } from './activity-log-add-form/activity-log-add-form.component';
import { ActivityLogListComponent } from "./activity-log-list/activity-log-list.component";
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, ActivityLogAddFormComponent, ActivityLogListComponent]
})
export class AppComponent {
  title = 'fitness-tracker-fe';
}
