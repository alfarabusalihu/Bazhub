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
    this.router.navigate(['/home'])

  }

  confirmedOrders(){ localStorage.setItem(('orders'),JSON.stringify(this.orders)) }

  getOrders(){
    return JSON.parse(localStorage.getItem('orders'))
  }
}

