import { Component, OnInit, inject } from '@angular/core';
import { ActivityLogAddFormComponent } from '../activity-log-add-form/activity-log-add-form.component';
import { ActivityLogListComponent } from '../activity-log-list/activity-log-list.component';
import { ActivityLogService } from '../activity-log.service';
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

  ngOnInit() {
    this.getActivityLogs()
  }
  
  getActivityLogs() {
    this.service.getActivityLogs().subscribe(
      (response) => {
        this.response = response
        this.activityLogs = this.response.data
      }
    )
  }

  addActivityLog(activityLog: object) {
    this.service.addActivityLog(activityLog).subscribe(
      (response) => { 
        this.getActivityLogs()
      }
    )
  }
}
