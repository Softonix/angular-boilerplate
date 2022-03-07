import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // login service returns Observable as under the hood can be async logic
  public login(): Observable<{token: string}> {
    console.log('Logged in');
    return of({ token: 'AccessToken' });
  }

}
