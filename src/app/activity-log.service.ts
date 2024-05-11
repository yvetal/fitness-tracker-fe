import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityLogService {
  activityLogs = [
    {
      "type": "Cycling",
      "distance": 30,
      "calories": 520,
      "intensity": 1,
      "duration": 120
    }, {
      "type": "Running",
      "distance": 10,
      "calories": 1000,
      "intensity": 4,
      "duration": 60
    }
  ]

  constructor() { }

  getActivityLogs() {
    return of(this.activityLogs)
  }

  addActivityLog(activityLog: any) {
    this.activityLogs = this.activityLogs.concat(activityLog)
  }
}
