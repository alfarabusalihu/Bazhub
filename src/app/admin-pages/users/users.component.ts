import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { User } from 'src/app/shared/interfaces/user.interface';
import { UserModalComponent } from '../shared/components/user-modal/user-modal.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  userData:User[]=[]
  modalRef:BsModalRef
  title:string="Users"
  pageSize:number=5

  userColumnDefinition=[
    {
      fieldName:'id',
      displayName:'ID'
    },
    {
      fieldName:'email',
      displayName:'Email'
    },
    {
      fieldName:'username',
      displayName:'Username'
    },
    {
      fieldName:'type',
      displayName:'Admin/User'
    },
  ]

  rowActions=[
    {label:'Delete',action:this.deleteUser.bind(this)}
  ]

  constructor(private authService:AuthenticationService, private modalService:BsModalService) { }

  ngOnInit(): void {
    this.userData=this.authService.getUsersFromStore()
    // console.log(this.userDetails)
    // this.getUser('4')
  }

  // getUser(index:string){
  //   this.userData.filter(user=>{
  //     if(index==user.id){
  //       // this.modalRef=this.modalService.show(ModalComponent,user)
  //       console.log(user)
  //       return user && true
  //     }
  //     else return false

  //   })
  // }

  getUser(userData:any){
    let initialState={userData}
    this.modalService.show(UserModalComponent,{ initialState:{ userData }})
  }

  deleteUser(user:any){
    this.authService.deleteUser(user)
  }
  }
