import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

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
  submit() {
    console.log(this.typeControl)
  }
}
