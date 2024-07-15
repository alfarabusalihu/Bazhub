import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/interfaces/user.interface';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  @Input() users: User;

  userLoginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required,Validators.email]),
    password: new FormControl('', Validators.required),
  })


  authenticationType: boolean = false
  isFieldEmpty: boolean = false


  userAutheticationDetails: User[] = [

    { id: 1, email: 'alfarabu@g.com', username: 'alfarabu', password: 'alfar' },
    { id: 2, email: 'alfar2abu@g.com', username: 'abu', password: 'abu12' },
  ]
  id: number = 0;
  email: string = '';
  username: string = '';
  password: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  signin() {

    const userIsValid = this.userAutheticationDetails.find(user =>
      user.email == this.email && user.password == this.password)

    console.log(this.email)

    if (userIsValid) {
      this.router.navigate(['/home'])
    }
    else {
      alert('User doesnt exist')
    }
  }

  onSubmit() {
    this.userLoginForm.value
  }

  userLogin(user: string) {
    return this.userLoginForm.get(user).invalid && (this.userLoginForm.get(user).dirty || this.userLoginForm.get(user).touched)
  }

  isEmail(user: string) {
    return  this.userLoginForm.get(user).touched && this.userLoginForm.get(user).validator 
  }


}

