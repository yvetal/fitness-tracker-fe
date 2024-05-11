import { Component, inject } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { ActivityLogAddFormComponent } from "../activity-log-add-form/activity-log-add-form.component";
import { ActivityLogListComponent } from "../activity-log-list/activity-log-list.component";
import { GoalSettingComponent } from "../goal-setting/goal-setting.component";
import { ProgressTrackingComponent } from "../progress-tracking/progress-tracking.component";
import { WorkoutPlansComponent } from "../workout-plans/workout-plans.component";
import { WearableDeviceComponent } from "../wearable-device/wearable-device.component";
import { NutritionTrackingComponent } from "../nutrition-tracking/nutrition-tracking.component";
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ActivityLogsComponent } from '../activity-logs/activity-logs.component';

@Component({
    selector: 'app-home-tab',
    standalone: true,
    templateUrl: './home-tab.component.html',
    styleUrl: './home-tab.component.scss',
    imports: [
        ActivityLogAddFormComponent,
        ActivityLogListComponent,
        GoalSettingComponent,
        ProgressTrackingComponent,
        WorkoutPlansComponent,
        WearableDeviceComponent,
        NutritionTrackingComponent,
        ActivityLogsComponent,
        MatTabsModule,
        MatButtonModule,
    ]
})
export class HomeTabComponent {
    
  authService = inject(AuthService);
  router = inject(Router);

  public logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
