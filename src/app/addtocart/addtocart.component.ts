import { Component, OnInit } from '@angular/core';
import { CartservicesService } from '../cartservices/cartservices.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {
  public products !: any[];
  public grandtotal:number = 0;

  constructor(private cart: CartservicesService, private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchData();
      this.grandtotal=this.cart.gettotalprice();

  }

  fetchData(): void {
    console.log("cart",this.cart)
    this.products=this.cart.cartitemlist
  }

  addToCart(product: any): void {
    // Add the product to the cart
    console.log("this is the product",product)
    this.cart.addtocart(product);
  }


  emptycart(){
    this.cart.removeallcart();
  }


  delete(item:any){
    this.cart.removecartitem(item)
  }
}
