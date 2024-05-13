import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { ActivityLogService } from '../activity-log.service';
import { MatInput, MatInputModule } from '@angular/material/input';

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
    MatButtonModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './workout-plans.component.html',
  styleUrl: './workout-plans.component.scss'
})
export class WorkoutPlansComponent {
  difficultyControl = new FormControl('');
  workoutPlans: any

  constructor(private service: ActivityLogService, private formBuilder: FormBuilder) { }
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
        this.getWorkoutPlans()
      }
    );
  }

  form: any;
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: new FormControl(''),
      difficulty: new FormControl(''),
      elements: this.formBuilder.array([])
    });
  }
  get elements(): FormArray {
    return this.form.get('elements') as FormArray;
  }
  addItem(): void {
    this.elements.push(
      this.formBuilder.group({
        type: new FormControl(''),
        distance: new FormControl('')
      })
    );
  }
  onSubmit() {
    this.service.addWorkoutPlan(this.form.value).subscribe(
      (response) => {
        this.getWorkoutPlans()
      }
    )
  }
}
