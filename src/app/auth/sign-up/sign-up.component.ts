import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/interfaces/user.interface';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {


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
      if(this.users){
        this.id=this.users.id;
        this.email=this.users.email;
        this.password=this.users.password;
      }
  }


  signup(){
    if (this.email.trim() && this.username.trim() && this.password.trim()){
      console.log(this.email,this.password,this.username)
      
      const newUser={
        id:this.userAutheticationDetails.length+1,
        email:this.email,
        username:this.username,
        password:this.password,
      }

      let newUserDetail=this.userAutheticationDetails.push(newUser);
      this.router.navigate(['profile'])
      console.log(newUserDetail)
      }
      else{
        alert('Fields shouldnt be empty at all')
        // this.isFieldEmpty=true;
      }
      


      }

}
