import { Component, OnInit, Output } from '@angular/core';
import { PhoneSpecifics } from 'src/app/shared/interfaces/user.interface';
import { ProductServiceService } from '../product-service.service';
import { Router } from '@angular/router';
import { Product } from '../shared/interfaces/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  // productInterface:boolean=true;

  products: Product[] = []


  constructor(public productService: ProductServiceService, private router: Router) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts()
    console.log(this.productService.getProducts())
    


  }


  // productInfo(index: any) {
  //   this.productService.productInfo(index);
  // }

  specificDisplay(index: any) {
    let productid = this.products[index];
    console.log(productid);
  }

  navigateProductDetail(id: string) { this.router.navigate(['/product-detail', id]) }

}
