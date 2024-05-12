import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  response: any
  constructor(private httpClient: HttpClient) { }
  login(data: any) {
      return this.httpClient.post('http://localhost:8000/users/login', data).pipe(tap((response) => {
        this.response = response
        if(this.response.data == 'Success')
        {
          localStorage.setItem('authUser', data.userid);
        }
      }))
  }
  logout() {
    localStorage.removeItem('authUser');
  }
  isLoggedIn() {
    try {
      return localStorage.getItem('authUser') !== null;
    }
    catch {
      return false
    }
  }
}
