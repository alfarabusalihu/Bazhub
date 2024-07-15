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


  categories:any = [
    { id: '1', name: "Main 1", parent: null },
    { id: '2', name: "Sub 1", parent: 1 },
    { id: '3', name: "Sub 2", parent: 1 },
    { id: '4', name: "Main 2", parent: null },
    { id: '5', name: "Main 3", parent: null },
    { id: '6', name: "Sub 1", parent: 5 },
  ]

  // categories: any = [
  //   {
  //     id: 'Main 1',
  //     name: "",
  //     categories: [
  //       {
  //         id: 'Sub 1',
  //         name: "",
  //       },
  //       {
  //         id: 'Sub 2',
  //         name: "",
  //       }
  //     ]
  //   },
  //   {      
  //     id: 'Main 2',
  //     name: "",
  //     categories: [
  //       {
  //         id: 'Sub 1',
  //         name: "",
  //       },
  //     ]
  //   },
  //   {
  //     id: 'Main 3',
  //     name: "",
  //     categories: []
  //   }
  // ]

  private products: Product[] = [
    
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
