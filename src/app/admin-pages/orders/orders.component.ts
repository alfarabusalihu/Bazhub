import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/client-pages/shared/interfaces/order.interface';
import { OrdersService } from './orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders:Order[]=[]
  // userDetail:string=''
  // orderId:number;
  // shippingMethod:string;



  constructor(private orderService:OrdersService) { }

  ngOnInit(): void {
    this.orders=this.orderService.getOrders()
    // this.getOrderDetail()

    // console.log(this.userDetail)
  }

  // getOrderDetail(){
  //   this.orders.forEach(order=>{
      
      
      
       

  //    }
  //   )

  }




