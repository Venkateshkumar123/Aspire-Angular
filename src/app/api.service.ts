import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { datamodel } from './admindashboard/model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
addproducts(data: datamodel) {
  throw new Error('Method not implemented.');
}

constructor(private http:HttpClient) { }


// ADD PRODUCTS
addproduct(data:datamodel){

  return this.http.post<datamodel>("http://localhost:3000/adminproductdetails",data)

}

// GET PRODUCTS
getproduct(){
  return this.http.get<datamodel[]>("http://localhost:3000/adminproductdetails");
}

// GET DELETE
deleteproduct(id:number){
  return this.http.delete<datamodel>("http://localhost:3000/adminproductdetails/"+id);
}

// FETCH DATA
fetchdata(id:number){
  return this.http.get<datamodel>("http://localhost:3000/adminproductdetails/"+id)
}

// UPDATE
updateproduct(data:datamodel,id:number){
return this.http.put<datamodel>("http://localhost:3000/adminproductdetails/"+id,data);
}


}


