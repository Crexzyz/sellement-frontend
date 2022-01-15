import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service'
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hidePassword: boolean = true;
  loginForm: FormGroup = {} as FormGroup;
  error_message: string = "";

  private ERROR_MESSAGES: {[char: string]: string} = {
    required: "This field is required",
    email: "Invalid email",
  };

  constructor(private formBuilder: FormBuilder,
              private authService: AuthenticationService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      "email": [null, [Validators.required, Validators.email]],
      "password": [null, [Validators.required]]
    })
  }

  async login(): Promise<void> {
    this.loginForm.markAllAsTouched();
    let email = this.loginForm.get("email");

    if(email == null || email.errors)
      return;

    let password = this.loginForm.get("password");

    if(password == null || password.errors)
      return;

    const data = await this.authService.login(email.value, password.value);
    if(data.error != undefined) {
      this.snackBar.open(data.error, "Close");
    }
  }

  getError(fieldName: string, errorName: string): string {
    let field = this.loginForm.get(fieldName)
    if(field == null)
      return ""
    
    return field.hasError(errorName) ? this.ERROR_MESSAGES[errorName] : ""
  }

}
