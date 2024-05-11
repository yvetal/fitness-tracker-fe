// nutrition-tracking.component.ts

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
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

  // constructor(private nutritionService: NutritionService) { }

  addMeal() {
    const requestBody = {
      Name: this.mealNameControl.value,
      Calories: this.caloriesControl.value
    };

    // this.nutritionService.addMeal(requestBody).subscribe(
    //   (response: any) => {
    //     console.log("Meal added successfully:", response);
    //     // Handle response accordingly
    //   },
    //   (error: any) => {
    //     console.error("Error adding meal:", error);
    //     // Handle error accordingly
    //   }
    // );
  }

  getMeals() {
  //   this.nutritionService.getMeals().subscribe(
  //     (response: any) => {
  //       this.meals = response.Meals;
  //     },
  //     (error: any) => {
  //       console.error("Error getting meals:", error);
  //       // Handle error accordingly
  //     }
  //   );
  }
}
