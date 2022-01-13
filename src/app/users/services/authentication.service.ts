import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { firstValueFrom, lastValueFrom, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private SERVER_ADDRESS: string = "http://localhost:8000";

  constructor(private client: HttpClient) { }

  public async login(email: string, password: string): Promise<any> {
    const data = {"email": email, "password": password};
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    const request = this.client.post(`${this.SERVER_ADDRESS}/users/login/`, JSON.stringify(data), httpOptions);
    return await firstValueFrom(request);
  }

  public async logout(): Promise<any> {
    // TODO: Remove token from localstorage
    // TODO: Implement in backend
    return this.client.post(`${this.SERVER_ADDRESS}/users/logout/`, {});
  }

}
