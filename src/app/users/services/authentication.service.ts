import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { firstValueFrom } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private static TOKEN_KEY: string = "access_token";
  private SERVER_ADDRESS: string = "http://localhost:8000";

  constructor(private client: HttpClient,
              private localStorageService: LocalStorageService,
              private router: Router) { }

  public async login(email: string, password: string): Promise<any> {
    const data = {"email": email, "password": password};

    const request = this.client.post(
      `${this.SERVER_ADDRESS}/users/login/`, JSON.stringify(data));
    
    let user_data: any = {};
    let token: string = "";

    try {
      user_data = await firstValueFrom(request);
      token = user_data[AuthenticationService.TOKEN_KEY];
    } catch (error: any) {
      user_data.error = error instanceof HttpErrorResponse ?
                        error.error['error'] : 'Unexpected error';
    }

    if(!user_data.error && token) {
      this.localStorageService.set(LocalStorageService.TOKEN_KEY, token);
      this.router.navigate(['/']);
    }

    return user_data
  }

  public async logout(): Promise<void> {
    const request = this.client.get(`${this.SERVER_ADDRESS}/users/logout/`);
    let response: any = {};

    try {
      response = await firstValueFrom(request);
    } catch (error: any) {
      // TODO: Add better error message
      console.log('Error');
    }

    if(response != null) {
      return;
    }

    this.localStorageService.remove(LocalStorageService.TOKEN_KEY);
    this.router.navigate(['/login']);
  }

  public getToken(): string {
    let token = this.localStorageService.get(LocalStorageService.TOKEN_KEY);
    return token == null ? '' : token;
  }

  public isAuthenticated(): boolean {
    return this.getToken() != '';
  }
}
