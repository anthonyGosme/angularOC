import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  signInForm: FormGroup;
  errorMessage: string;

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]
      ]
    });
  }

  onSubmit() {
    const email = this.signInForm.get('email').value;
    const password = this.signInForm.get('password').value;

    this.authService.signInUser(email, password).then(
      () => {
        console.log("connection OK") ;
        this.router.navigate(['/books']);
      },
      error => {
        this.errorMessage = error;
      }
    );
  }
}
