import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ActivityLogService {
  userid: string
  constructor(private httpClient: HttpClient) { 
    try{
      this.userid = localStorage.getItem('authUser') || ""
    }
    catch {
      this.userid = ''
    }
  }

  refreshUserId() {
    try{
      this.userid = localStorage.getItem('authUser') || ""
    }
    catch {
      this.userid = ''
    }
  }
  getActivityLogs() {
    this.refreshUserId() 
    return this.httpClient.get('http://localhost:8000/activity-logs?userid='+this.userid)
  }
  addActivityLog(activityLog: any) {
    this.refreshUserId() 
    activityLog['userid'] = this.userid
    return this.httpClient.post('http://localhost:8000/activity-logs', activityLog)
    return of({})
  }
  getGoals() {
    this.refreshUserId() 
    return this.httpClient.get('http://localhost:8000/goals?userid='+this.userid)
  }
  addGoal(goal: any) {
    this.refreshUserId() 
    goal['userid'] = this.userid
    return this.httpClient.post('http://localhost:8000/goals', goal)
  }
  addUser(user: any) {
    this.refreshUserId() 
    return this.httpClient.post('http://localhost:8000/users', user)
  }
  addDevice(device: any) {
    this.refreshUserId() 
    device['userid'] = this.userid
    return this.httpClient.post('http://localhost:8000/devices', device)
  }
  getDevice() {
    this.refreshUserId() 
    return this.httpClient.get('http://localhost:8000/devices?userid='+this.userid)
  }
  disconnectDevices() {
    this.refreshUserId() 
    return this.httpClient.delete('http://localhost:8000/devices?userid='+this.userid)
  }
  getMeals() {
    this.refreshUserId() 
    return this.httpClient.get('http://localhost:8000/meals?userid='+this.userid)
  }
  addMeal(meal: any) {
    this.refreshUserId() 
    meal['userid'] = this.userid
    return this.httpClient.post('http://localhost:8000/meals', meal)
  }
  getWorkoutPlans(difficulty: any) {
    this.refreshUserId() 
    return this.httpClient.get('http://localhost:8000/workout-plans?difficulty='+difficulty)
  }
  resetWorkoutPlans() {
    this.refreshUserId() 
    return this.httpClient.post('http://localhost:8000/workout-plans/add-dummies', {})
  }
  addWorkoutPlan(plan: any) {
    this.refreshUserId() 
    plan['userid'] = this.userid
    return this.httpClient.post('http://localhost:8000/workout-plans', plan)
  }
}
