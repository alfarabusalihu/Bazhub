export interface Order{
    id:number;
    biilingDetails:{};
    finalTotal:number;
    paymentMethod:string;
    products:[];
    shippingMethod:string;
}