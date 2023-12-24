import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartservicesService {

  public productlist=new BehaviorSubject<any>([])
  public cartitemlist:any=[]

constructor() { }

// get
getproduct(){
  return this.productlist.asObservable();
}

// add to cart

addtocart(product:any){
  console.log("product value",product)
this.cartitemlist.push(product);
this.productlist.next(this.cartitemlist)
this.gettotalprice();
}



// total price

gettotalprice():number{
  let grandtotal=0;
this.cartitemlist.map((a:any)=>{
  grandtotal +=a.total;
  // console.log(grandtotal)
})
return grandtotal;
}


// Empty Cart

removeallcart(){
  this.cartitemlist=[]
  this.productlist.next(this.cartitemlist)

}

removecartitem(product:any){
  this.cartitemlist.map((a:any,index:any)=>{
    if(product.id === a.id)
    this.cartitemlist.splice(index,1)
  })
  this.productlist.next(this.cartitemlist);
}
}
