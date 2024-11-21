import { Injectable } from '@angular/core';
import { SignupData } from './signup.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginData } from '../login/login.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private readonly serverUrl: string = 'http://localhost:4000';

  constructor(private readonly httpClient: HttpClient) {}

  public verifyFormFields(signupData: SignupData): boolean {
    if (
      (signupData.name != '' && signupData.cin != '' && signupData.adress != '',
      signupData.phone != '',
      signupData.email != '' && signupData.password != '')
    )
      return true;
    else return false;
  }

  public signup(signupData: SignupData): Observable<any> {
    return this.httpClient.post(
      this.serverUrl + '/authentication/signup',
      signupData
    );
  }

  public login(loginData: LoginData): Observable<any> {
    return this.httpClient.post(
      this.serverUrl + '/authentication/login',
      loginData
    );
  }
}
