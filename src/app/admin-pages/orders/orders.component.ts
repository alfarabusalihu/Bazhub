import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/client-pages/shared/interfaces/order.interface';
import { OrdersService } from './orders.service';
import { Table_Data } from '../shared/interfaces/table-data.interface';
import { BsModalService } from 'ngx-bootstrap/modal';
import { OrderModalComponent } from '../shared/components/order-modal/order-modal.component';

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

  
  columnDefinition=[
    {
      fieldName:'id',
      displayName:'ID',
    },
    {
      fieldName:'finalTotal',
      displayName:'Total',

    },
    {
      fieldName:'paymentMethod',
      displayName:'Payment Method',

    },
    {
      fieldName:'shippingMethod',
      displayName:'Shipping Method',

    }

  ]

  rowActions=[
    {label:'Delete',action:this.deleteOrder.bind(this)}
  ]
  ordersData:Order[]=[]
  title:string="Orders"
  pageSize:number=5



  constructor(private orderService:OrdersService, public modalService:BsModalService) { }

  ngOnInit(): void {
    this.loadTableData()
    console.log(this.ordersData)
  }

  loadTableData(){
    this.ordersData=this.orderService.getOrders()
  }

  getOrders(orderData:any){
    // onclick.subscribe()
    let initialState={ orderData }
    this.modalService.show(OrderModalComponent, { initialState:{orderData}})

  }

  deleteOrder(item:any){
    console.log(item)
    this.orderService.deleteOrder(item)

  }

  // getOrderDetail(){
  //   this.orders.forEach(order=>{
      
      
      
       

  //    }
  //   )

  }




