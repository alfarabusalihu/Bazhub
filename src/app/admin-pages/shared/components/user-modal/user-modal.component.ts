import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { User } from 'src/app/shared/interfaces/user.interface';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent implements OnInit {
  @Input() userData:any

  constructor(public modalRef:BsModalRef,private userService:AuthenticationService) { }

  ngOnInit(): void {
    console.log("orders:",this.userData)
  }

  changeUserData(){
    let user=this.userService.getUsers()
    user.map((consumer:any)=>{
      this.userData.id==consumer.id ? consumer=this.userData : console.log("hehe")
      this.userService.saveToStore()
      // console.log(this.userService.getUsers())
      console.log(this.userData)
    })

  }

}
