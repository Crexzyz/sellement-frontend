import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hidePassword: boolean = true;
  loginForm: FormGroup = {} as FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      "email": [null, [Validators.required, Validators.email]],
      "password": [null, [Validators.required]]
    })

    this.loginForm.valueChanges.subscribe(console.log)
  }

  getError(fieldName: string, errorName: string): string {
    let field = this.loginForm.get(fieldName)
    if(field == null)
      return ""

    return field.hasError(errorName) ? "Error" : ""
  }

}
