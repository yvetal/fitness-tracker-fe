import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { ActivityLogAddFormComponent } from "../activity-log-add-form/activity-log-add-form.component";
import { ActivityLogListComponent } from "../activity-log-list/activity-log-list.component";
import { GoalSettingComponent } from "../goal-setting/goal-setting.component";
import { ProgressTrackingComponent } from "../progress-tracking/progress-tracking.component";
import { WorkoutPlansComponent } from "../workout-plans/workout-plans.component";
import { WearableDeviceComponent } from "../wearable-device/wearable-device.component";
import { NutritionTrackingComponent } from "../nutrition-tracking/nutrition-tracking.component";

@Component({
    selector: 'app-home-tab',
    standalone: true,
    templateUrl: './home-tab.component.html',
    styleUrl: './home-tab.component.scss',
    imports: [
        MatTabsModule,
        ActivityLogAddFormComponent,
        ActivityLogListComponent,
        GoalSettingComponent,
        ProgressTrackingComponent,
        WorkoutPlansComponent,
        WearableDeviceComponent,
        NutritionTrackingComponent
    ]
})
export class HomeTabComponent {

}
