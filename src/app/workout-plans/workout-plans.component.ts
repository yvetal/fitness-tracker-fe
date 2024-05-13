import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { ActivityLogService } from '../activity-log.service';

@Component({
  selector: 'app-workout-plans',
  standalone: true,
  imports: [ 
    CommonModule ,
    MatCardModule , 
    MatOptionModule , 
    MatFormFieldModule , 
    MatSelectModule , 
    MatIconModule , 
    ReactiveFormsModule,
    MatButtonModule
  ],
  templateUrl: './workout-plans.component.html',
  styleUrl: './workout-plans.component.scss'
})
export class WorkoutPlansComponent {
  difficultyControl = new FormControl('');
  workoutPlans: any

  constructor(private service: ActivityLogService) { }
  getWorkoutPlans() {
    this.service.getWorkoutPlans(this.difficultyControl.value).subscribe(
      (response: any) => {
        this.workoutPlans = response.data
      }
    );
  }
  resetDefaults() {
    this.service.resetWorkoutPlans().subscribe(
      (response: any) => {
        
      }
    );
  }
}
