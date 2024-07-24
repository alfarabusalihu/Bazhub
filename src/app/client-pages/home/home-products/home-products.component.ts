import { Component, OnInit } from '@angular/core';
// import { PhoneSpecifics } from 'src/app/shared/interfaces/user.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../shared/interfaces/product.interface';
import { CartItem } from '../../shared/interfaces/cart.interface';
import { CartServiceService } from '../../cart/cart-service.service';
import { ProductServiceService } from '../../products/product-service.service';

@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.scss']
})
export class HomeProductsComponent implements OnInit {

  products:Product[]=[]
  productItem:Product;
  cartItem:CartItem;
  productId:string;
  quantity: number = 1;



  constructor(private productService:ProductServiceService,private route:ActivatedRoute,private cartService:CartServiceService) { }

  ngOnInit(){ 
    // this.productService.sortProducts()
    this.products=this.productService.getProducts();
    
  }

  productInfo(index:any){ this.productService.productInfo(index)}

  addToCart(item:Product){
    console.log("item",item);
      const data:CartItem={
        id:item.id,
        name:item.name,
        unitPrice:item.unitPrice,
        qty:1,
      }
      console.log(data);
      this.cartService.addToCart(data)
      
      console.log("data",this.cartService.getCartItems())
    }
  }




