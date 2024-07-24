import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/interfaces/user.interface';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  userLoginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required,Validators.email]),
    password: new FormControl('', Validators.required),
  })

  authenticationType: boolean = false
  isFieldEmpty: boolean = false
  logged:boolean=false;

  userAutheticationDetails: User[] = []


  constructor(private router: Router, public authService:AuthenticationService) { }

  ngOnInit(): void {
    this.userAutheticationDetails=this.authService.getUsers()
    this.getUserById('3')  
  }

  // signin() {
  //   const userIsValid = this.userAutheticationDetails.find(user =>
  //      user.email == this.email && user.password == this.password)

  //   if (userIsValid) {
  //     this.router.navigate(['/home'])
  //   }
  //   else {
  //     alert('User doesnt exist')
  //   }
  // }

  onSubmit() { this.userLoginForm.value }

  userLoginValidation(user: string) {
    return this.userLoginForm.get(user).invalid && (this.userLoginForm.get(user).dirty || this.userLoginForm.get(user).touched)
  }

  isEmail(user: string) {
    return  this.userLoginForm.get(user).touched && this.userLoginForm.get(user).validator 
  }

  getUserById(id:string){
    this.authService.getUserById(id)  
  }
  userLogging(){ 
    // const emailValue=this.userLoginForm.get('email').value
    // let passValue=this.userLoginForm.get('password').value

    /* instead of defining variables for every ValueConverter, 
     here the values are passed into a single object and it will be sent as whole to login method*/

    const payload={
      email:this.userLoginForm.get('email').value,
      password:this.userLoginForm.get('password').value
    }
    
    if(this.authService.login(payload)){
      console.log('success')
      this.router.navigate(['/user-profile'])
    }else{
      this.logged=true
      alert("wrong Email or Password")
    }
  }

 



}

