import { Component, OnInit } from '@angular/core';
// import { PhoneSpecifics } from 'src/app/shared/interfaces/user.interface';
import { Product } from '../shared/interfaces/product.interface';
import { ActivatedRoute } from '@angular/router';
import { CartServiceService } from '../cart/cart-service.service';
import { CartItem } from '../shared/interfaces/cart.interface';
import { ProductServiceService } from '../products/product-service.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  value: string;
  productData: Product | undefined;
  cartData: Product | undefined;
  productId: string | null;
  quantity: number = 1;

  constructor(
    public productService: ProductServiceService, 
    private route: ActivatedRoute, 
    public cartService: CartServiceService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id');
      if (this.productId) this.productData = this.productService.getProduct(this.productId);
      console.log(this.productData)
    })

  }

  changeQty(value: string){
    if(value === 'true') this.quantity++;
    if(value === 'false' && this.quantity > 1) {
      this.quantity-this.quantity--;}
  }

  addToCart(){
    const data:CartItem={
      id:this.productData?.id,
      name:this.productData.name,
      unitPrice:this.productData.unitPrice,
      qty:this.quantity,
    }
    // console.log(data);
    this.cartService.addToCart(data);
    // console.log(this.cartService.getCartItems());
  }
}
