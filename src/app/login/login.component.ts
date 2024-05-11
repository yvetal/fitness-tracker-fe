import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);
  protected loginForm = new FormGroup({
    userid: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })
  onSubmit(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      this.authService.login(this.loginForm.value)
      .subscribe((data: any) => {
        if(this.authService.isLoggedIn()){
          this.router.navigate(['/activityLogs']);
        }
        console.log(data);
      });
    }
  }
}
