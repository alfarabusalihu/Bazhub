import { Component, OnInit } from '@angular/core';
import { CartItem } from '../shared/interfaces/cart.interface';
import { CartServiceService } from '../cart/cart-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  productData:CartItem[];

  orderedItems:[]=[]
  subTotal: number;
  shippingFee: number = 300;
  fullTotal:string;
  shippingMethodEnum=shippingMethod;


  // Checkout Form
    // billingDetailsForm - Mandatory
    // products - optional
    // shippingMethod - Mandatory
    // paymentMethod - Mandatory

  checkoutForm: FormGroup = new FormGroup({
    billingDetails: new FormGroup({
      firstName: new FormControl('', Validators.required, ),
      lastName: new FormControl(''),
      companyName: new FormControl('', Validators.maxLength(5)),
      city: new FormControl(''),
      country: new FormControl(''),
      zipCode: new FormControl(''),
      mobile: new FormControl(''),
      address: new FormControl(''),
      email: new FormControl('', Validators.email)
    }),
    finalTotal: new FormControl(0),
    products: new FormControl([]),
    shippingMethod: new FormControl('',Validators.required,),
    paymentMethod: new FormControl('',Validators.required,),
  })

  // shippingMethods
  //  FREE_SHIPPING = "FREE_SHIPPING"

  // checkoutForm: {
  //   billingDetails: {
  //     firstName: '',
  //     lastName: '',
  //     companyName: new FormControl(''), 
  //     city: new FormControl(''),
  //     country: new FormControl(''),
  //     zipCode: new FormControl(''),
  //     mobile: new FormControl(''),
  //     address: new FormControl(''),
  //     email: new FormControl('')
  //   },
  //   products: new FormControl([]),
  //   shippingMethod: new FormControl(''),
  //   paymentMethod: new FormControl(''),
  // }
  // })

  constructor(private cartService:CartServiceService) { }

  ngOnInit(): void {
    this.productData = JSON.parse(JSON.stringify(this.cartService.getCartItems())); 
    this.checkoutForm.patchValue({ products: this.productData });
    this.calculateTotal();
  }

  calculateTotal(){
    let subTotal=0;

    this.productData.forEach((item)=>{
      // console.log("calculateTotal=",item);
      let total=item.qty*item.unitPrice;
      // console.log("Total=",total);
      subTotal=subTotal+total;
    })

    this.subTotal = subTotal;
    // console.log("Sub Total=",subTotal);
    return subTotal;
  }

  formValue(){
   let fraud= this.checkoutForm.value
   
  }

  onSubmit(){
    console.log("form submit", this.checkoutForm.value)
    
  }
}

   export enum shippingMethod{
    shippingFee="shipping_Fee",
    freeShipping="free_Shipping",
    localRate="local_rate"
    
  }




