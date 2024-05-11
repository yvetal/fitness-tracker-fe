import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ActivityLogService } from '../activity-log.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-activity-log-add-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule],
  templateUrl: './activity-log-add-form.component.html',
  styleUrl: './activity-log-add-form.component.scss'
})
export class ActivityLogAddFormComponent {
  typeControl = new FormControl('');
  distanceControl = new FormControl('');
  caloriesControl = new FormControl('');
  intensityControl = new FormControl('');
  durationControl = new FormControl('');
  
  @Output() newItemEvent = new EventEmitter<Object>();

  constructor(private service: ActivityLogService) { }
  submit() {
    let addedActivityLog = {
      'type': this.typeControl.value,
      'duration':  parseInt(this.durationControl.value || '0'),
      'distanceInKm': parseInt(this.distanceControl.value || '0'),

      "calories": parseInt(this.caloriesControl.value || '0'),
      "intensity": this.intensityControl.value
    }
    
    this.newItemEvent.emit(addedActivityLog);
  }
}
