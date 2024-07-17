import { Injectable } from '@angular/core';
import { Category } from './shared/interfaces/cart.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

 

  
  categories:Category[] = [
    { id: '1', name: "Mobile phones", parent: null },
    { id: '2', name: "Memory cards", parent: 1 },
    { id: '3', name: "Aux cables", parent: 1 },
    { id: '4', name: "iPads and Tablets", parent: null },
    { id: '5', name: "Apple", parent: 2 },
    { id: '6', name: "Huwei", parent: 2 },
    { id: '7', name: "Smart watches_and wearables", parent: null },
    { id: '8', name: "Apple", parent: 3 },
    { id: '9', name: "Samsung", parent: 3 },
    { id: '10', name: "Mobile accessories", parent: null },
    { id: '11', name: "Huawei", parent: 4 },
    { id: '12', name: "Xiaomi", parent: 4 },
    { id: '13', name: "Bluetooth devices", parent: null },
    { id: '14', name: "Baseus", parent: 5 },
    { id: '15', name: "Remax", parent: 5 },
    { id: '16', name: "Earphones and headphones", parent: null },
    { id: '17', name: "Anker", parent: 5 },
    { id: '18', name: "Bose", parent: 5 },
    { id: '19', name: "Power banks", parent: null },
    { id: '20', name: "Aspor", parent: 6 },
    { id: '21', name: "Energizer", parent: 6 },
    { id: '22', name: "Others", parent: null },
    { id: '23', name: "Computer peripherals", parent: 7 },
    { id: '24', name: "Gaming peripherals", parent: 7 },
    
  ]



  constructor() { }

  getAllMainCtg(){
    let fowler=this.categories.filter(items=>
     items.parent==null 
    )
    console.log(fowler)
    return fowler
  }

  getCategoryById(id:string){
    this.categories.find(ctg=>{
      if(ctg.id==id){
        let item=ctg
        console.log(item)
      }
    })

  }
}
