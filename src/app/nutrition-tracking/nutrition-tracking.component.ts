// nutrition-tracking.component.ts

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ActivityLogService } from '../activity-log.service';
// import { NutritionService } from '../nutrition.service';

@Component({
  selector: 'app-nutrition-tracking',
  templateUrl: './nutrition-tracking.component.html',
  styleUrls: ['./nutrition-tracking.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    CommonModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class NutritionTrackingComponent {
  mealNameControl = new FormControl('');
  caloriesControl = new FormControl('');
  meals: any[] | undefined;

  constructor(private service: ActivityLogService) { }

  addMeal() {
    const requestBody = {
      name: this.mealNameControl.value,
      calories: this.caloriesControl.value
    };

    this.service.addMeal(requestBody).subscribe(
      (response: any) => {
        this.getMeals()
      }
    );
  }

  getMeals() {
    this.service.getMeals().subscribe(
      (response: any) => {
        this.meals = response.data;
      }
    );
  }
  ngOnInit() {
    this.getMeals()
  }
}
