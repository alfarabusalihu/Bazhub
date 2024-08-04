import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { User } from 'src/app/shared/interfaces/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  userDetails:User[]=[]

  constructor(private authService:AuthenticationService) { }

  ngOnInit(): void {
    this.userDetails=this.authService.getUsers()
    // console.log(this.userDetails)
    this.getUser('4')
  }

  getUser(index:string){
    this.userDetails.filter(user=>{
      if(index==user.id){
        console.log(user)
        return user && true
      }
      else return false

    })

  }}
