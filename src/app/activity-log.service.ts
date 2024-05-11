import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ActivityLogService {
  activityLogs = {
    "data": [
            {
                "_id": "663f136fe3ee98c5410e8df8",
                "type": "string",
                "distance": 0,
                "calories": 0,
                "intensity": 0,
                "duration": 0
            },
            {
                "_id": "663f1f3d3c5cd7a282e16d31",
                "type": "string",
                "distance": 1,
                "calories": 0,
                "intensity": 0,
                "duration": 0
            }
    ],
    "code": 200,
    "message": "Activity Log data retrieved successfully"
}
  constructor(private httpClient: HttpClient) { }

  getActivityLogs() {
    
    console.log('Getting logs')
    return this.httpClient.get('http://localhost:8000/activity-logs')
    // return of(this.activityLogs)
  }

  addActivityLog(activityLog: any) {
    console.log(activityLog)
    return this.httpClient.post('http://localhost:8000/activity-logs', activityLog)
    // this.activityLogs.data = this.activityLogs.data.concat(activityLog)
    return of({})
  }
}
