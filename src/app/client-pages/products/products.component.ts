import { Component, OnInit, Output } from '@angular/core';
import { PhoneSpecifics } from 'src/app/shared/interfaces/user.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productInterface:boolean=true;
  
  phoneSpecifics:PhoneSpecifics[]=[
    {id:1,Model:"iPhone 15 pro Max",features:'Ram:8Gb, Hardisk:256Gb'},
    {id:2,Model:"iPhone 15 pro Max",features:'Ram:8Gb, Hardisk:256Gb'},
    {id:3,Model:"iPhone 15 pro Max",features:'Ram:8Gb, Hardisk:256Gb'}


  ]

  constructor() { }

  ngOnInit(): void {
  }

  specificDisplay(index:number){
    if(index){
     console.log(index)
    }
 }

}
