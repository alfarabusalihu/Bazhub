export interface Product{
    id:string;
    name:string;
    category?:string;
    isFeatured:boolean;
    unitPrice:number;
    shortDescription:string;
    description:string; 
    image:string;
    createdDate: string;
    modifiedDate:string;

}