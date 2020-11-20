import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { UserService } from '../service/UserService';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  userForm: FormGroup = null as any;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}
  onSubmitForm() {
    const formValue = this.userForm.value;
    const newUser = new User(
      formValue['firstName'],
      formValue['lastname'],
      formValue['email'],
      formValue['drinkPreference']
    );
    this.userService.addUser(newUser);
    //  this.userService.emitUser() ;
    this.router.navigate(['/user']);
  }
  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      drinkPreference: ['', Validators.required]
    });
  }
}
