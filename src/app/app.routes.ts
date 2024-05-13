import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeTabComponent } from './home-tab/home-tab.component';
import { authGuard } from './auth/auth.guard';
import { RegisterComponent } from './register/register.component';
import { LoginRegisterComponent } from './login-register/login-register.component';

export const routes: Routes = [
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    },
    {
        path: 'login', component: LoginRegisterComponent
    },
    {
        path: 'homeTab', component: HomeTabComponent, canActivate: [authGuard]
    },
];
