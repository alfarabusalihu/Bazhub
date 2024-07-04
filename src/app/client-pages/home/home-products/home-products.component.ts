import { Component, OnInit } from '@angular/core';
import { PhoneSpecifics } from 'src/app/shared/interfaces/user.interface';
import { ProductServiceService } from '../../product-service.service';
import { Router } from '@angular/router';
import { Product } from '../../shared/interfaces/product.interface';
import { CartItem } from '../../shared/interfaces/cart.interface';
import { CartServiceService } from '../../cart/cart-service.service';

@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.scss']
})
export class HomeProductsComponent implements OnInit {

  products:Product[]=[]
  cartItem:CartItem;



  constructor(private productService:ProductServiceService,private router:Router,private cartService:CartServiceService) { }

  ngOnInit(){
    this.products=this.productService.getProducts();
    
  }



  productInfo(index:any){ this.productService.productInfo(index)}

  addToCart(){
   return this.cartService.addToCart(this.cartItem);
  }



}
