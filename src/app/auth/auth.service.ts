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
        localStorage.setItem('authUser', data.userid);
      }
      // }));
      return of(false)
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
  constructor() { }
}
