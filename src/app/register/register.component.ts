import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ActivityLogService } from '../activity-log.service';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatButtonModule , MatCardModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  response: any
  router = inject(Router);
  protected registerForm = new FormGroup({
    userid: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })
  constructor(private service: ActivityLogService) {}
  onSubmit(){
    if(this.registerForm.valid){
      console.log(this.registerForm.value);
      this.service.addUser(this.registerForm.value)
      .subscribe((response: any) => {
        this.response = response
        if(this.response.code == 200){
          this.router.navigate(['/login']);
        }
        else {
          alert('Could not create user!')
        }
      });
    }
  }
}
