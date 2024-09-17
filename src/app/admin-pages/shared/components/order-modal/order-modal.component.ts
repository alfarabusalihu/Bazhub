import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { OrdersService } from 'src/app/admin-pages/orders/orders.service';

@Component({
  selector: 'app-order-modal',
  templateUrl: './order-modal.component.html',
  styleUrls: ['./order-modal.component.scss']
})
export class OrderModalComponent implements OnInit {
  @Input() orderData: any
  constructor(public modalRef: BsModalRef, private orderService: OrdersService) { }

  ngOnInit(): void {
    console.log('orders:', this.orderData.billingDetails.firstName)
  }

  ChangeOrderDetails() {
    var order = this.orderService.getOrders()
    console.log(order)

    order.map((orderDetail: any) => {
      this.orderData.id == orderDetail.id ? orderDetail = this.orderData : console.log("something's wrong")
      console.log(orderDetail.finalTotal)
      this.orderService.addOrder(orderDetail)
    }
    )
  }

}
