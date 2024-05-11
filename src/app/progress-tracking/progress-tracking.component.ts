import { Component, Input , OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-progress-tracking',
  templateUrl: './progress-tracking.component.html',
  styleUrls: ['progress-tracking.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
  ]
})
export class ProgressTrackingComponent implements OnInit {
  @Input() progressData: any; // Input property to receive progress tracking data

  constructor() {}

  ngOnInit(): void {
    this.progressData = {
      "GoalTarget": "1",
      "TotalCalories": "2",
      "Difficulty": "3"
    }
  }

}
