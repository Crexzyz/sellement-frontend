import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/users/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {

  constructor(private authService: AuthenticationService) { }

  async logout(): Promise<void> {
    this.authService.logout();
  }
}
