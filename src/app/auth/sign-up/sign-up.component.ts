import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormControlName, FormGroup, ValidationErrors, Validator, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/interfaces/user.interface';
import { AuthenticationService } from '../authentication.service';
import { passwordValidator } from '../password-validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  isFieldEmpty: boolean = false
  isPasswordValid: boolean = false;
  userRegistrationForm: FormGroup

  @Input() users: User;

  userAutheticationDetails: User[] = []

  id: number = 0;
  email: string = '';
  username: string = '';
  password: string = '';
  confirmPassword: string = ''

  constructor(private router: Router, private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.userAutheticationDetails = this.authService.getUsers()
    this.createUserForm()
    // this.passwordValidation()
  }

  // signup() {
  //   if (this.email.trim() && this.username.trim() && this.password.trim()) {
  //     console.log(this.email, this.password, this.username)

  //     const newUser = {
  //       id: this.userAutheticationDetails.length + 1,
  //       email: this.email,
  //       username: this.username,
  //       password: this.password,
  //     }

  //     let newUserDetail = this.userAutheticationDetails.push(newUser);
  //     this.authService.saveToStore();
  //     this.router.navigate(['/profile'])
  //     console.log(newUserDetail)
  //   }
  // }

  onSubmit() {
    // console.log(this.userRegistrationForm.value) 
    this.userRegistration()
    this.authService.getAuthenticatedUser()
  }

  formInputValidation(data: string) {
    // let folwer=this.userRegistrationForm.get(data)
    // console.log('folwer',folwer);
    // return folwer;
    return this.userRegistrationForm.get(data).invalid &&
      (this.userRegistrationForm.get(data).dirty || this.userRegistrationForm.get(data).touched)
  }

  createUserForm() {
    this.userRegistrationForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        username: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
        confirmPassword: new FormControl('', [Validators.required])
      },
      { validators: passwordValidator }
    );
  }
  
  userRegistration() {
    let registeredUser = this.userRegistrationForm.value
    delete registeredUser.confirmPassword;
    this.authService.registerUser(registeredUser)
  }

  ngOnDestroy(){
    this.authService.logout()
  }


}






