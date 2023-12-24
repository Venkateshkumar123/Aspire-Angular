import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { datamodel } from '../admindashboard/model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  public dataid! :number;
  public Product!:datamodel;

  constructor(private activatedroute:ActivatedRoute,private router:Router,private api:ApiService) { }

  ngOnInit(): void{
    this.activatedroute.paramMap.subscribe((param:Params)=>{
      this.dataid=param['get']("id")
      // console.log("data id id",this.dataid)

    })

    this.api.fetchdata(this.dataid).subscribe((data:datamodel)=>{
      this.Product = data;

    })
  }

update(){
  this.api.updateproduct(this.Product,this.dataid).subscribe((res:datamodel)=>{
this.router.navigate(["/admindashboard"]);

  })
}

}
