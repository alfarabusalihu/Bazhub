import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders/orders.service';
import { ProductServiceService } from 'src/app/client-pages/products/product-service.service';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { DummyProducts } from 'src/app/client-pages/shared/const/dummy-products.const';
import { Product } from 'src/app/client-pages/shared/interfaces/product.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  products:Product[]=DummyProducts

  ordersCount:number;
  productsCount:number;
  usersCount:number;

  constructor(private orderService:OrdersService, private productService:ProductServiceService, private authService:AuthenticationService) { }

  ngOnInit(): void {
    this.ordersCounting()
    this.productsCounting()
    this.usersCounting()
  }

  ordersCounting(){
    this.ordersCount= this.orderService.getOrders().length
    console.log(this.ordersCount)
    return this.ordersCount
  }

  productsCounting(){
    this.productsCount=this.products.length
    return this.productsCount
  }

  usersCounting(){
    this.usersCount= this.authService.getUsers().length
    return this.usersCount
  }

}
