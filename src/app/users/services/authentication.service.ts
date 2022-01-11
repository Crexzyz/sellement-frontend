import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private SERVER_ADDRESS: string = "http://localhost:8000";

  constructor(private client: HttpClient) { }

  public login(email: string, password: string): Observable<any> {
    // TODO: Add token to localstorage if successful
    const data = {"email": email, "password": password};
    return this.client.post(`${this.SERVER_ADDRESS}/users/login/`, data);
  }

  public logout(): Observable<any> {
    // TODO: Remove token from localstorage
    // TODO: Implement in backend
    return this.client.post(`${this.SERVER_ADDRESS}/users/logout/`, {});
  }

}
