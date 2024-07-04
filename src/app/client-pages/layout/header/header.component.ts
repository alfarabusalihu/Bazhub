import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CartServiceService } from '../../cart/cart-service.service';
import { CartItem } from '../../shared/interfaces/cart.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchModalRef: BsModalRef;
  cartItemCount:number;

  constructor(private _bms: BsModalService,private cartservice:CartServiceService) { }

  ngOnInit(): void {
    this.cartItemCount=this.cartservice.cartItems.length;
  }

  showSearchModal(template: TemplateRef<any>){
    this.searchModalRef = this._bms.show(template, { class: 'modal-fullscreen' });
    console.log(template)
  }
}
