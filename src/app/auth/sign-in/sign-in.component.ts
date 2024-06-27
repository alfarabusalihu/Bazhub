import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/interfaces/user.interface';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  authenticationType:boolean=false
  isFieldEmpty:boolean=false


  @Input() users:User |null=null;

  userAutheticationDetails:User[]=[
    
      { id:1,email:'alfarabu@g.com',username:'alfarabu',password:'alfar'},
      { id:2,email:'alfar2abu@g.com',username:'abu',password:'abu12'},
    ]
    id:number=0;
    email:string='';
    username:string='';
    password:string='';
    
    constructor(private router:Router) { }




  ngOnInit(): void {
  }
  signin(){
    
    const userIsValid=this.userAutheticationDetails.find(user=>
      user.email==this.email && user.password==this.password)
  
      console.log(this.email)
      
    if(userIsValid){
      this.router.navigate(['/home'])
    }
    else{
      alert('User doesnt exist')
    }
    
  
    }

}

