import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CartServiceService } from '../../cart/cart-service.service';
import { CartItem } from '../../shared/interfaces/cart.interface';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchModalRef: BsModalRef;
  cartItemCount:number;
  cartData:CartItem[];
  isAuthUserValid:boolean=false;

  constructor(private _bms: BsModalService,private cartservice:CartServiceService, private authService:AuthenticationService, private router:Router ) { }

  ngOnInit(): void {
    // this.getAuthUser()
   }
  
  showSearchModal(template: TemplateRef<any>){
    this.searchModalRef = this._bms.show(template, { class: 'modal-fullscreen' });
    console.log(template)
  }
  
  getCartCount(){
   const cartItems = this.cartservice.getCartItems();
   return cartItems.length
  }

  logout(){
    if(confirm("Do you want to Log out") ){
      let isLogged=this.authService.logout()
      this.router.navigate(['/sign-in'])
      return isLogged;
    }
    else{
      // this.router.navigate(['/user-profile'])
      console.log('hehehheheh')
    }
  }

  getAuthUser(){
    let isAuthUserValid:boolean=false
    let user=this.authService.getAuthenticatedUser();

    if(user){
      return isAuthUserValid=true
    }
    else{
      return false
    }

  }
}
