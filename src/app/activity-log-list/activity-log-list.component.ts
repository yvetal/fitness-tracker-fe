import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityLogComponent } from '../activity-log/activity-log.component';

@Component({
  selector: 'app-activity-log-list',
  standalone: true,
  imports: [CommonModule, ActivityLogComponent],
  templateUrl: './activity-log-list.component.html',
  styleUrl: './activity-log-list.component.scss'
})
export class ActivityLogListComponent {
  activityLogList = [{
    "duration": {
      "hours": 1,
      "minutes": 30
    },
    "distanceInKm": 30,
    "calories": 520,
    "intensity": "High",
    "type": "Cycling"
  }, {
    "duration": {
      "hours": 0,
      "minutes": 30
    },
    "distanceInKm": 10,
    "calories": 500,
    "intensity": "Low",
    "type": "Running"
  },
]
}
