import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { User } from 'src/app/shared/interfaces/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  admin:User
  isAuthenticated:boolean=false

  adminLogin:FormGroup=new FormGroup({
    email:new FormControl(''),
    password:new FormControl(''),

  })

  constructor(private router:Router,private authService:AuthenticationService) { }

  ngOnInit(): void {
    
  }

  adminLogging(){
    let authDetails={
      email:this.adminLogin.get('email').value,
      password:this.adminLogin.get('password').value
    }
    this.authService.login(authDetails)
   
      // this.router.navigate(['/admin/dashboard'])
      // console.log(this.admin)
      // return  this.admin
  }

  authenticationConfirm(){
   if(this.admin=this.authService.getAuthenticatedAdmin()) {
     this.isAuthenticated=true
   }
    return this.admin && this.isAuthenticated
  }

  logout(){
      this.authService.logoutAdmin()
      this.isAuthenticated=false
      return this.isAuthenticated
  }

}
