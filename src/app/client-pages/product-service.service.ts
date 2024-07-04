import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PhoneSpecifics } from '../shared/interfaces/user.interface';
import { Router } from '@angular/router';
import { Product } from './shared/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private name: string;

  products: Product[] = [
    {
      id: '1',
      name: "iPhone 15 pro Max",
      category:'Phones',
      unitPrice: 320000.00,
      shortDescription: 'Ram:8Gb, Hardisk:256Gb',
      description: "To redo something youve undone, press CtrlY or F4. If  doesnt seem to work, you mayneed to press the key or Fn Key, then F4 on your keyboard, or select Redo on the Quick Access toolbar.",
      image: 'https://placehold.co/600x400',

    },
    {
      id: '2',
      name: "iPhone 15 pro",
      category:'Phones',
      unitPrice: 300000.00,
      shortDescription: 'Ram:8Gb, Hardisk:256Gb',
      description: "To redo something youve undone, press CtrlY or F4. If  doesnt seem to work, you mayneed to press the key or Fn Key, then F4 on your keyboard, or select Redo on the Quick Access toolbar.",
      image: 'https://placehold.co/600x400'
    },
    {
      id: '3',
      name: "iPhone 15 ",
      category:'Phones',
      unitPrice: 400000.00,
      shortDescription: 'Ram:8Gb, Hardisk:256Gb',
      description: "To redo something youve undone, press CtrlY or F4. If  doesnt seem to work, you mayneed to press the key or Fn Key, then F4 on your keyboard, or select Redo on the Quick Access toolbar.",
      image: 'https://placehold.co/600x400'
    },


  ]

  constructor(private http: HttpClientModule, public router: Router) { }

  productInfo(index: any) {
    let productinfo = this.products[index]
    this.router.navigate(['/product-detail', productinfo.id])
  }

  getProducts(): Product[] { return this.products }

  getProduct(id: string): Product | undefined {
    return this.products.find(product => product.id === id)
  }
}
