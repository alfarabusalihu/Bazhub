import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { User } from 'src/app/shared/interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  userDetail:User

  constructor(private authService:AuthenticationService, private router:Router) { }

  ngOnInit(): void { 

    this.userDetail=this.authService.getAuthenticatedUser()
    
    // fowler=this.userDetail
    
  }

  // goTo(){
  //   this.router.navigate(['admin'])
  // }

}
