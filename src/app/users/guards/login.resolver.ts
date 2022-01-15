import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class LoginResolver implements Resolve<boolean> {
  constructor(
    private router: Router,
    private authService: AuthenticationService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const authenticated = this.authService.isAuthenticated();
    if(authenticated)
      this.router.navigate(['/']);
    
    return of(authenticated);
  }
}
