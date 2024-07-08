import { Component, OnInit } from '@angular/core';
import { CartServiceService } from './cart-service.service';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from '../shared/interfaces/cart.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  productData:CartItem[];
  
  subTotal: number;
  shippingFee: number = 300;


  constructor(public cartService:CartServiceService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.productData = JSON.parse(JSON.stringify(this.cartService.getCartItems())); 
    //  console.log("data: ",this.productData,"cart",this.cartService.getCartItems());
    this.calculateTotal();
    
  }

  deleteItem(index:number){
    this.productData.splice(index,1)
  }

  changeQty(value: string,item:CartItem){
    if(value === 'true') item.qty++;
    if(value === 'false' && item.qty > 1) {item.qty--;}

    // console.log(this.productData);
    // console.log(this.cart.getCartItems())
  }

  updateCart(){
    this.cartService.setCartItems(this.productData)
    console.log(this.cartService.getCartItems())

  }
  
  // sumProducts(item:CartItem){
  //   this.sum=0
  //   let cartProducts=[];
  //   let total=item.qty*item.unitPrice;
  //   cartProducts.push(total);

  //   for(let i=0;i<cartProducts.length;i++){
  //     this.sum=this.sum+cartProducts[i]
  //   }
  //   console.log(this.sum);
  // }
  calculateTotal(){
    let subTotal=0;

    this.productData.forEach((item)=>{
      // console.log("calculateTotal=",item);
      let total=item.qty*item.unitPrice;
      // console.log("Total=",total);
      subTotal=subTotal+total;
    })

    this.subTotal = subTotal;
    // console.log("Sub Total=",subTotal);
    return subTotal;
  }
    
  }
      
  

  

