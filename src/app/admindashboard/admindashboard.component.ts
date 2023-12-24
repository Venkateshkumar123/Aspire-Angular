import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { datamodel } from './model';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {


  dsimages:any=["assets/images/forzah5.jpg","assets/images/hc1.png","assets/images/jc4.jpg"];



productform!:FormGroup;
data:undefined|datamodel[];
  constructor(private formbuilder:FormBuilder,private api:ApiService) { }

  ngOnInit():void {

    this.productform=this.formbuilder.group({
      name:['',Validators.required],
      image:['',Validators.required],
      discription:['',Validators.required],
      genere:['',Validators.required],
      price:['',Validators.required],
    });
    this.getproducts();
  }

  addproducts(data:datamodel){
    // console.log(data)
    this.api.addproduct(data).subscribe((res=>{
      this.productform.reset();
      this.getproducts();

    }));



  }

  getproducts(){
    this.api.getproduct().subscribe(res=>{
      this.data= res;
    })
  }

}
