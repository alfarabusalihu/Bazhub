import { Injectable } from '@angular/core';
import { CartItem } from '../shared/interfaces/cart.interface';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  private cartItems: CartItem[] = [
    // {
    //   id:"2",
    //   name:"rety",
    //   unitPrice:230000,
    //   qty:3,
    // },
  ];

  // cartUpdate:CartItem[]=[]

  constructor() {}

  addToCart(data: CartItem){
    const item=this.cartItems.find(cartItem=>cartItem.id==data.id)
    if(item) {
      item.qty=item.qty+data.qty
    }else{
      this.cartItems.push(data);
      this.saveCart();
    }
    // console.log(item);
    // console.log(this.cartItems);
  }

  getCartItems(){ return this.cartItems; }

  saveCart(){
   localStorage.setItem('cart',JSON.stringify(this.cartItems));
   }

  //  saveUpdate(){
  //   localStorage.setItem('cartUpdate',JSON.stringify(this.cartUpdate));
  //   }

   deleteCart(items:CartItem){
    const deleteItem=this.cartItems.find(item=>item.id==items.id)
    if (deleteItem){
      this.cartItems.splice(1);
    
   }}

   setCartItems(items:CartItem[]){
    this.cartItems=items;
   }

   ngOnDestroy(){
    console.log("Cart destroyed")
   }
   }

