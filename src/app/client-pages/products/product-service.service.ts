import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { PhoneSpecifics } from '../shared/interfaces/user.interface';
import { Router } from '@angular/router';
import { DummyProducts } from '../shared/const/dummy-products.const';
import { Product } from '../shared/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})


export class ProductServiceService {

  private name: string;



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

  private products: Product[] = DummyProducts

  constructor( public router: Router) {
    this.sortProducts();
  }

  productInfo(index: any) {
    let productinfo = this.products[index]
    this.router.navigate(['/product-detail', productinfo.id])
  }

  getProducts(): Product[] { return this.products }

  getProductsFromStore(): Product[] { return JSON.parse(localStorage.getItem('Products')) }


  storeProducts(product:Product[]){
    localStorage.setItem(('Products'),JSON.stringify(product))
  }

  getProduct(id: string): Product | undefined {
    return this.products.find(product => product.id === id)
  }

  sortProducts() {
    this.products.sort((a, b) => {
      return new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime()
    })
  }

  addProduct(product:Product){
    this.products.push(product)
  }

  deleteproduct(data:any){
    // get products from localstorage
    let products=this.getProductsFromStore()

    //get the right object and compare 
    products.filter((item:any)=>{
      if(data.id==item.id){
        //deleting confirmation
          confirm("are you sure")
          // find index and splice it
          let index=products.indexOf(item)
          products.splice(index,1)
        // console.log('if',products,index)
      }
    else "wrong execution"
  }
  )
    this.storeProducts(products)
  }
}

