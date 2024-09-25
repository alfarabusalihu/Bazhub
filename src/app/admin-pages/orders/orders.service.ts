import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/client-pages/shared/interfaces/order.interface';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  orders:Order[]=[]

  constructor(private router:Router) { }

  addOrder(item:Order){
    this.orders.push(item);
    this.confirmedOrders();
    // this.router.navigate(['/home'])

  }

  confirmedOrders(){ localStorage.setItem(('orders'),JSON.stringify(this.orders)) }

  getOrders(){ return JSON.parse(localStorage.getItem('orders')) }

  deleteOrder(data:any){
    // get products from localstorage
    let orders=this.getOrders()

    //get the right object and compare 
    orders.filter((item:any)=>{
      if(data.id==item.id){
        //deleting confirmation
          confirm("are you sure")
          // find index and splice it
          let index=orders.indexOf(item)
          orders.splice(index,1)
        // console.log('if',orders,index)
      }
    else "wrong execution"
  }
  )
    this.confirmedOrders()
  }
}

