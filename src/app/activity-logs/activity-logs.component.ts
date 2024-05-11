import { Component, OnInit, inject } from '@angular/core';
import { ActivityLogAddFormComponent } from '../activity-log-add-form/activity-log-add-form.component';
import { ActivityLogListComponent } from '../activity-log-list/activity-log-list.component';
import { ActivityLogService } from '../activity-log.service';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-activity-logs',
  standalone: true,
  imports: [ActivityLogAddFormComponent, ActivityLogListComponent, MatButtonModule],
  templateUrl: './activity-logs.component.html',
  styleUrl: './activity-logs.component.scss'
})
export class ActivityLogsComponent implements OnInit{
  response: any
  activityLogs: any
  
  constructor(private service: ActivityLogService) { }

  authService = inject(AuthService);
  router = inject(Router);

  ngOnInit() {
    this.getActivityLogs()
  }
  
  getActivityLogs() {
    this.service.getActivityLogs().subscribe(
      (response) => {
        this.response = response
        this.activityLogs = this.response.data
        console.log(this.activityLogs)
      }
    )
  }

  addActivityLog(activityLog: object) {
    this.service.addActivityLog(activityLog).subscribe(
      (response) => {
        console.log(response)
      }
    )
    this.getActivityLogs()
  }
  public logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
