import { Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { Table_Data } from '../../interfaces/table-data.interface';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() columnDefinition:any
  @Input() tableData:any
  @Input() title:string
  @Input() pageSize:number
  @Output() onClick:EventEmitter<any>=new EventEmitter()
  @ContentChild(TemplateRef) rowTemplate:TemplateRef<any>
  @Input() rowActions:{label:string,action:(row:any)=>void}[]



  // countArray:number[]=[]
  visibleArray:[]=[]
  searchResults:[]=[]
  showArray:number[]=[]

  totalPages:number;
  index:number
  currentPage:number=1;
  searchText:string=''
  isActive=false
  
  tableDataMain:any
    
  constructor() { }
  
  ngOnInit(): void {
    this.visibleData(this.currentPage)
    this.sortTableData()
    this.searchResults=JSON.parse(JSON.stringify([...this.tableData]))
  }

  findCurrentPage(pageValue:boolean){
    // console.log('page',this.currentPage,'count',this.countArray.length)
    if( pageValue && this.currentPage<=this.totalPages ){
      // console.log(this.currentPage,this.totalPages)
      this.currentPage++
      this.visibleData(this.currentPage)
    }
    else if( !pageValue && 0 < this.currentPage ){
      // console.log(this.currentPage,this.totalPages)
      this.currentPage--
      this.visibleData(this.currentPage)
    }
  }

  visibleData(item:any){
    //so when the pagenumber change in showArray it will be updated as currentpage
    this.currentPage = item
    //so once the currentPage is dynamic the pages will get listed according to the currentPage
    this.getPagesCount()
    
    let start = ( this.currentPage-1 ) * ( this.pageSize );
    let end = start + this.pageSize
    
    // let start=(this.currentPage*this.pageSize)-this.pageSize;
    // let end=(start+this.pageSize)-1
    this.visibleArray = this.tableData.slice( start,end )
  }

  searchByText(searchText:string){
    
    this.searchResults=this.tableData.filter((data: any| object)=> { 
      data.includes(searchText)
    }
    )
  }
  

  onRowClick(rowData:any){
    console.log('RowData',rowData)
    this.onClick.emit(rowData);
  }

  sortTableData(){
    this.tableData.sort((a:any,b:any)=>{
      return (a.id)-(b.id)
    }
  )}

  getPagesCount(){
    //calculating totalPages that have to be displayed
    this.totalPages=Math.ceil(this.tableData.length/this.pageSize)
    //having a dynamic end value to determine showArray
    let pageCountLimit=(this.currentPage + this.pageSize)-1
    //1+6=7-1=6
    console.log(this.totalPages,pageCountLimit,this.pageSize )
    //pagesCount shouldn't exceed totalPages
    if(this.totalPages >= pageCountLimit){
      //2 and 6
      //length was reduced to 0 so the previous loop numbers  won't be added to the array
      console.log(this.totalPages,this.showArray.length)
      this.showArray.length=0
      //the for loop will create an array of numbers until it equals page countlimit
      for(let x=this.currentPage; x<=pageCountLimit ; x++ ){ 
        this.showArray.push(x) 
        console.log(this.showArray)
      } 
    }
    else {
      //once again length was reduced to 0 so the previous loop numbers  won't be added to the array 
      console.log('count',this.totalPages,'length',this.showArray.length)
       this.showArray.length=0
      for(let x=this.currentPage; x<=this.totalPages ; x++ ){ 
        ///1 and 2
        this.showArray.push(x) 
        console.log(this.showArray)
      } 
      } 

    }

  // getPagesCount(){

  //   this.totalPages=Math.ceil(this.tableData.length/this.pageSize)
  //   console.log(this.totalPages,this.tableData,this.currentPage)
  //   let pageLimitCount=6
  //   let start= this.currentPage
  //   let end=(this.currentPage+pageLimitCount)
    

  //   if(this.currentPage<this.totalPages){
    
  //   this.showArray.length=0
  //   for (let x=start;x<end && x<=this.totalPages;x++){
  //     this.showArray.push(x)
  //   }
  //   console.log('listed',this.showArray)
  //   }
  //   else {
  //     if(Math.max(...this.showArray) < this.totalPages){
  //       this.showArray.push(this.totalPages)
  //       console.log('listeddiff',this.showArray)
  //     }
  //   } 
  //   }

  }





