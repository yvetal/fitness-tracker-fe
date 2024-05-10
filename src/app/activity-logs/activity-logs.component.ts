import { Component, OnInit } from '@angular/core';
import { ActivityLogAddFormComponent } from '../activity-log-add-form/activity-log-add-form.component';
import { ActivityLogListComponent } from '../activity-log-list/activity-log-list.component';
import { ActivityLogService } from '../activity-log.service';

@Component({
  selector: 'app-activity-logs',
  standalone: true,
  imports: [ActivityLogAddFormComponent, ActivityLogListComponent],
  templateUrl: './activity-logs.component.html',
  styleUrl: './activity-logs.component.scss'
})
export class ActivityLogsComponent implements OnInit{
  activityLogs: any
  
  constructor(private service: ActivityLogService) { }

  ngOnInit() {
    this.getActivityLogs()
  }
  
  getActivityLogs() {
    this.service.getActivityLogs().subscribe(
      (response) => {
        this.activityLogs = response
      }
    )
  }

  addActivityLog(activityLog: object) {
    this.service.addActivityLog(activityLog)
    this.service.getActivityLogs().subscribe(
      (response) => {
        console.log(response)
      }
    )
    this.getActivityLogs()
  }
}
