import { Component, OnInit } from '@angular/core';
import { CartItem } from '../shared/interfaces/cart.interface';
import { CartServiceService } from '../cart/cart-service.service';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { PaymentMethodsEnum, ShippingMethodsEnum } from '../shared/enums';
import { Order } from 'src/app/shared/interfaces/order.interface';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  productData:CartItem[];

  orderedItems:Order[]=[]
  submitted=false;
  subTotal: number;
  shippingFee: number = 300;
  localPickup:number= 100;
  fullTotal:number;
  
  shippingMethods = ShippingMethodsEnum;
  paymentMethods = PaymentMethodsEnum;

  // Checkout Form
    // billingDetailsForm - Mandatory
    // products - optional
    // shippingMethod - Mandatory
    // paymentMethod - Mandatory

  checkoutForm: FormGroup = new FormGroup({
    billingDetails: new FormGroup({
      firstName: new FormControl('',[Validators.required, Validators.minLength(4)]),
      lastName: new FormControl('',[Validators.required]),
      companyName: new FormControl('',[Validators.required, Validators.maxLength(15)]),
      city: new FormControl('',[Validators.required]),
      country: new FormControl('',[Validators.required]),
      zipCode: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required]),
      address: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required, Validators.email])
    }),
    finalTotal: new FormControl(0),
    products: new FormControl([]),
    shippingMethod: new FormControl(ShippingMethodsEnum.SHIPPING_FEE),
    paymentMethod: new FormControl(PaymentMethodsEnum.BANK_TRANSFER),
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

  constructor(private cartService:CartServiceService) { 
    
  }

  ngOnInit(): void {
    this.productData = JSON.parse(JSON.stringify(this.cartService.getCartItems())); 
    this.checkoutForm.patchValue({ products: this.productData });

    this.calculateSubtotal();

    const shippingMethod=this.checkoutForm.get("shippingMethod");
    this.calculateTotal(shippingMethod.value);

    console.log( "shippping", shippingMethod);

    this.checkoutForm.get("shippingMethod").valueChanges.subscribe((res: ShippingMethodsEnum)=>{
      this.calculateTotal(res)
    })


  }
  
  // get firstName(){
  //   return this.checkoutForm.get("billingDetails.firstName");
  // }

  checkValidity(formControlName:string){
    return this.checkoutForm.get(formControlName).invalid && 
    (this.checkoutForm.get(formControlName).dirty || this.checkoutForm.get(formControlName).touched)
  }


  onReset(): void {
    this.submitted = false;
    this.checkoutForm.reset();
  }


  calculateSubtotal(){
    this.subTotal = 0;
    this.productData.forEach((item)=>{
      // console.log("calculateTotal=",item);
      let total=item.qty*item.unitPrice;
      // console.log("Total=",total);
      this.subTotal = this.subTotal + total;
    })
  }

  formValue(){
   let fraud= this.checkoutForm.value 
  }

  onSubmit(){
    if (this.checkoutForm.valid) {
     console.log("form submit", this.checkoutForm.value);
    }
    
    this.orderedItems=this.checkoutForm.value;
    console.log("Ordereditems=",this.orderedItems)   
  }

  calculateTotal(shippingMethod:ShippingMethodsEnum){
    let finalTotal=0 
    if (shippingMethod == ShippingMethodsEnum.FREE_SHIPPING){
      finalTotal = this.subTotal + 0
    }
    else if(shippingMethod == ShippingMethodsEnum.SHIPPING_FEE) {
      finalTotal = this.subTotal + this.shippingFee;
    }
    else if(shippingMethod == ShippingMethodsEnum.LOCAL_PICKUP){
      finalTotal = this.subTotal + this.localPickup;
    }

    this.checkoutForm.patchValue({ finalTotal: finalTotal });
    this.fullTotal=finalTotal;

    console.log("calculateTotal:",shippingMethod,finalTotal);
  }

  
}





