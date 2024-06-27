import { Component, OnInit } from '@angular/core';
import { PhoneSpecifics } from 'src/app/shared/interfaces/user.interface';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor() { }

  phoneSpecifics:PhoneSpecifics[]=[
    {id:1,Model:"iPhone 15 pro Max",features:'Ram:8Gb, Hardisk:256Gb'},
    {id:2,Model:"iPhone 15 pro Max",features:'Ram:8Gb, Hardisk:256Gb'},
    {id:3,Model:"iPhone 15 pro Max",features:'Ram:8Gb, Hardisk:256Gb'}


  ]

  ngOnInit(): void {
  }

  specificDisplay(index:number){
     if(index){
      console.log(index)
     }
  }

}
