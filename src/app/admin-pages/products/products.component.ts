import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ProductServiceService } from 'src/app/client-pages/products/product-service.service';
import { Product } from 'src/app/client-pages/shared/interfaces/product.interface';
import { ProductModalComponent } from '../shared/components/product-modal/product-modal.component';
// import { TableComponent } from '../shared/components/table/table.component';

@Component({
  selector: 'admin-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productColumnDefinition=[
    {
      fieldName:'id',
      displayName:'ID',
    },
    {
      fieldName:'name',
      displayName:'Name',

    },
    {
      fieldName:'category',
      displayName:'Category',

    },
    {
      fieldName:'unitPrice',
      displayName:'Unit Price',

    },
    {
      fieldName:'shortDescription',
      displayName:'Product Details',

    }
  ]

  rowActions=[
    {label:'Delete',action:this.deleteItem.bind(this)}
    
  ]
  productData:Product[]=[]
  showProducts:any
  title:string='Products'
  index:number;
  pageSize:number=4
  dltItem:Product
  
  modalRef:BsModalRef
  
  constructor(private productService:ProductServiceService,
    public modalService:BsModalService
  ) { }

  ngOnInit(): void {
    this.loadTableData()
    console.log(this.productData)

  }
  loadTableData(){
    this.productData=this.productService.getProductsFromStore()
  }

  getProducts(data:any){
    if (data=='delete'){
      console.log(data)
    }
    console.log(data)
    this.dltItem=JSON.parse(JSON.stringify(data))

    let initialState=data
    // console.log('products:',this.showProducts)
    this.modalRef=this.modalService.show(ProductModalComponent, {initialState: {data}})

    
    return true 
    
    // console.log('products:',ShowProducts)
  }

  deleteItem(data:any){
    console.log(data)
      this.productService.deleteproduct(data)
  }

  // deleteProduct(){
  //   let index:number
  //   this.productData[index]
  //   this.productData.slice(index)
  // }

  //
 
    
  }

  


