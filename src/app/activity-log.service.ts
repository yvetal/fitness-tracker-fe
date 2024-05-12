import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ActivityLogService {
  userid: string
  constructor(private httpClient: HttpClient) { 
    this.userid = localStorage.getItem('authUser') || ""
  }

  getActivityLogs() {
      return this.httpClient.get('http://localhost:8000/activity-logs?userid='+this.userid)
  }

  addActivityLog(activityLog: any) {
    activityLog['userid'] = this.userid
    return this.httpClient.post('http://localhost:8000/activity-logs', activityLog)
    return of({})
  }

  getGoals() {
    return this.httpClient.get('http://localhost:8000/goals?userid='+this.userid)
  }
  addGoal(goal: any) {
    goal['userid'] = this.userid
    return this.httpClient.post('http://localhost:8000/goals', goal)
  }
  addUser(user: any) {
    return this.httpClient.post('http://localhost:8000/users', user)
  }
}
