import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ProductServiceService } from 'src/app/client-pages/products/product-service.service';
import { Product } from 'src/app/client-pages/shared/interfaces/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products:Product[]=[]
  index:number;

  constructor(private productService:ProductServiceService, 
    // public bsModalRef: BsModalRef
  ) { }

  ngOnInit(): void {
    this.products=this.productService.getProducts()
    // this.getProductbyId(1)

  }

  getProduct(index:string){
    let product=this.products.filter(product=>{
      if(index==product.id){
        console.log(product)
        return product
      }
      else return 'wrong'

    })
  //   this.products.find(product=>{
  //     if(product){
  //       console.log(product)
  //       return product
  //     }
  //     else{
  //       return false
  //     }
  // })
    
  }

  

}
