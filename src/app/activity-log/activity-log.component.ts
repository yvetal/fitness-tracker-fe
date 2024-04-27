import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-activity-log',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './activity-log.component.html',
  styleUrl: './activity-log.component.scss'
})
export class ActivityLogComponent {
  activityLog = {
    "duration": {
      "hours": 1,
      "minutes": 30
    },
    "distanceInKm": 30,
    "calories": 50,
    "intensity": "High",
    "type": "Cycling"
  }
}
