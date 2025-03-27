import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  userForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      email: ['',Validators.required,Validators.pattern('[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$')],
      password: ['',Validators.required],
    });
  }

  get email() {
    return this.userForm.get('email');
  }
  get password() {
    return  this.userForm.get('password');
  }

  // userForm = new FormGroup({
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  // });
  signup() {
    console.log(this.userForm.value);
  }
}
