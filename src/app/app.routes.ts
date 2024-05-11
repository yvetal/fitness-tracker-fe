import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ActivityLogsComponent } from './activity-logs/activity-logs.component';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'activityLogs', component: ActivityLogsComponent, canActivate: [authGuard]
    },
];
