import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(data: any) {
    // return this.httpClient.post(`${this.baseUrl}/login`, data)
    //   .pipe(tap((result) => {
      if(data.userid == 'admin' && data.password == 'admin')
      {
        console.log(data)
        localStorage.setItem('authUser', 'temp');
      }
      // }));
      return of(false)
  }
  logout() {
    localStorage.removeItem('authUser');
  }
  isLoggedIn() {
    return localStorage.getItem('authUser') !== null;
  }
  constructor() { }
}
