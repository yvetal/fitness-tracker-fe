import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeTabComponent } from './home-tab/home-tab.component';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'homeTab', component: HomeTabComponent, canActivate: [authGuard]
    },
];
