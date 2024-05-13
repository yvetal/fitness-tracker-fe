import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-login-register',
  standalone: true,
  imports: [LoginComponent, RegisterComponent, MatToolbarModule],
  templateUrl: './login-register.component.html',
  styleUrl: './login-register.component.scss'
})
export class LoginRegisterComponent {

}
