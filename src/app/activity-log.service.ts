import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityLogService {
  activityLogResponse = {
    'activityLogs': [{
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
  ] }
  constructor() { }
  getActivityLogs() {
    
    return of (this.activityLogResponse)
  }
  addActivityLog(activityLog: any) {
    this.activityLogResponse.activityLogs = this.activityLogResponse.activityLogs.concat(activityLog)
  }
}
