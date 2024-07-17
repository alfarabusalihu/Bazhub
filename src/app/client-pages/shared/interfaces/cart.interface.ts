export interface CartItem{
    id: string;
    name: string;
    unitPrice: number;
    qty: number;
  }

  export interface Category{
    id:string,
    name:string,
    parent:null|number,

  }