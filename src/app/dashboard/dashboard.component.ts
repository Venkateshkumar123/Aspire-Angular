
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { HttpClient } from '@angular/common/http';
import { CartservicesService } from '../cartservices/cartservices.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

public totalitem=0;



  dsimages: any = [
    "assets/images/cb.jpg",
    "assets/images/tc.png",
    "assets/images/lou.jpg",
    "assets/images/di2.jpg",
    "assets/images/srp.jpg",
    "assets/images/fort1.jpg",
    "assets/images/Gtav0.jpg",
    "assets/images/gg0.jpg",
    "assets/images/gta47.jpg",
    "assets/images/cp0.jpg",
    "assets/images/codc1.jpg",
    "assets/images/bs0.jpg",
    "assets/images/cs1.jpg",
    "assets/images/fs1.jpg",
    "assets/images/ss0.jpg",
    "assets/images/rws1.jpg",
    "assets/images/ts1.jpg",
    "assets/images/gowr0.jpg",
    "assets/images/pti0.jpg",
    "assets/images/ptr0.jpg",
    "assets/images/bts0.jpg",
    "assets/images/gg0.jpg",
    "assets/images/ss7.jpg",
    "assets/images/nfsp0.jpg",
    "assets/images/mgp.jpg",
    "assets/images/c2.png",
    "assets/images/dr.jpg",
    "assets/images/fh5.png",
    "assets/images/fh4.jpg"
  ];

  title = 'dashboard';
  dashboardproduct: any;
  set2:any;
dashboard: any;
  set3: any;
  set4: any;
 productlist: any;


  constructor(private auth: AuthService, private http: HttpClient,private cart:CartservicesService,private api:CartservicesService,) {
    http.get("http://localhost:3000/dashboardproduct").subscribe(dashboardproducts=>{
      this.dashboard=dashboardproducts;
      // console.log(JSON.stringify(this.dashboard));
    }),



    // set Two

    http.get("http://localhost:3000/set2").subscribe(dashboardset2=>{
      this.set2=dashboardset2;

    }),

    // Set-Three
    http.get("http://localhost:3000/set3").subscribe(dashboardset3=>{
      this.set3=dashboardset3;

    }),


    // Set-Four
    http.get("http://localhost:3000/set4").subscribe(dashboardset4=>{
      this.set4=dashboardset4;

    })

  }

  user = { displayName: "somename" };

  ngOnInit(): void {
    this.auth.canAccess();
    if (this.auth.isAuthenticated()) {
      this.auth.detail().subscribe({
        next: (data) => {
          this.user.displayName = data.users[0].displayName;
        }
      });
    }


    this.cart.getproduct().subscribe(res=>{
      this.totalitem=res.length;
    })


    this.api.getproduct().subscribe(res=>{
      // console.log(res);
      this.productlist =res;

      this.productlist.forEach((a:any)=>{
        Object.assign(a,{quantity: 1, total:a.price})
      });
    });
  }


  // addto cart

addtocart(item:any){

this.cart.addtocart(item);
console.log("this is the item",item)
}


}

