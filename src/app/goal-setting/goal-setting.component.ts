// goal-setting.component.ts

import { Component } from '@angular/core';
import { FormControl ,  ReactiveFormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-goal-setting',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './goal-setting.component.html',
  styleUrls: ['goal-setting.component.scss']
})
export class GoalSettingComponent {
  currentActivityLevelControl = new FormControl('');
  currentWeightControl = new FormControl('');
  currentHeightControl = new FormControl('');
  goalControl = new FormControl('');
  difficultyControl = new FormControl('');

  constructor() { }

  submitGoal() {
    const requestBody = {
      currentActivityLevel: this.currentActivityLevelControl.value,
      currentWeight: this.currentWeightControl.value,
      currentHeight: this.currentHeightControl.value,
      goal: this.goalControl.value,
      difficulty: this.difficultyControl.value
    }}

}
