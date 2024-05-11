import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';

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
  workoutName: string | undefined;
  exercises: any[] | undefined;

  // constructor(private workoutService: WorkoutService) { }

  addWorkoutPlan() {
    const userId = 'user123'; // Replace with actual user ID
    const requestBody = {
      Exercise: {
        name: this.workoutName,
        instructions: '' // Add instructions if needed
      }
    };

    // this.workoutService.addWorkoutPlan(userId, requestBody).subscribe(
    //   (response: any) => {
    //     console.log("Workout plan added successfully:", response);
    //     // Handle response accordingly
    //   },
    //   (error: any) => {
    //     console.error("Error adding workout plan:", error);
    //     // Handle error accordingly
    //   }
    // );
  }

  getWorkoutPlans() {
    const difficulty = this.difficultyControl.value;

    // this.workoutService.getWorkoutPlans(difficulty).subscribe(
    //   (response: any) => {
    //     this.workoutName = response.Workoutname;
    //     this.exercises = response.Exercises;
    //   },
    //   (error: any) => {
    //     console.error("Error getting workout plans:", error);
    //     // Handle error accordingly
    //   }
    // );
  }
}
