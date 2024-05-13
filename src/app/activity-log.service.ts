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
  addDevice(device: any) {
    device['userid'] = this.userid
    return this.httpClient.post('http://localhost:8000/devices', device)
  }
  getDevice() {
    return this.httpClient.get('http://localhost:8000/devices?userid='+this.userid)
  }
  disconnectDevices() {
    return this.httpClient.delete('http://localhost:8000/devices?userid='+this.userid)
  }
  getMeals() {
    return this.httpClient.get('http://localhost:8000/meals?userid='+this.userid)
  }
  addMeal(meal: any) {
    meal['userid'] = this.userid
    return this.httpClient.post('http://localhost:8000/meals', meal)
  }
  getWorkoutPlans(difficulty: any) {
    return this.httpClient.get('http://localhost:8000/workout-plans?difficulty='+difficulty)
  }
  resetWorkoutPlans() {
    return this.httpClient.post('http://localhost:8000/workout-plans/add-dummies', {})
  }
  addWorkoutPlan(plan: any) {
    plan['userid'] = this.userid
    return this.httpClient.post('http://localhost:8000/workout-plans', plan)
  }
}
