import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef} from 'ngx-bootstrap/modal';
import { ProductServiceService } from 'src/app/client-pages/products/product-service.service';
import { Product } from 'src/app/client-pages/shared/interfaces/product.interface';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss']
})
export class ProductModalComponent implements OnInit {
  @Input() data: Product


  constructor(public modalRef: BsModalRef, private productService: ProductServiceService) { }

  ngOnInit(): void {
    // console.log('data',this.data)
  }

  changeProductData() {
    //product variable contains the products that are stored in localstorage
    var product = this.productService.getProductsFromStore()
    // with filter method i want to find id of the row i clicked and want to equal the details of both product types
    product.map((productDetails: any) => {
      productDetails.id == this.data.id ? productDetails.name = this.data.name : console.log(productDetails, this.data)
      //product array gets updated to the localstorage
      this.productService.storeProducts(product)
    })
  }


}
