import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { ActivityLogService } from '../activity-log.service';

@Component({
  selector: 'app-activity-log-add-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatButtonModule],
  templateUrl: './activity-log-add-form.component.html',
  styleUrl: './activity-log-add-form.component.scss'
})
export class ActivityLogAddFormComponent {
  typeControl = new FormControl('');
  distanceControl = new FormControl('');
  caloriesControl = new FormControl('');
  intensityControl = new FormControl('');
  durationHoursControl = new FormControl('');
  durationMinutesControl = new FormControl('');
  constructor(private service: ActivityLogService) {}
  submit() {
    console.log(this.typeControl)
    this.service.addActivityLog({
      'type': this.typeControl.value,
      'duration': {
        'hours': parseInt(this.durationHoursControl.value || '0'),
        'minutes': parseInt(this.durationMinutesControl.value || '0'),
      },
      'distanceInKm': parseInt(this.distanceControl.value || '0'),
      
      "calories": parseInt(this.caloriesControl.value || '0'),
      "intensity": this.intensityControl
    })
    this.service.getActivityLogs().subscribe(
      (response) => {
        console.log(response)
      }
    )
  }
}
