import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/users/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  async logout(): Promise<void> {
    this.authService.logout();
  }
}
