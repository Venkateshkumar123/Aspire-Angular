import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router,private http:HttpClient) { }

  isAuthenticated():boolean{
    if (sessionStorage.getItem('token')!==null) {
      console.log("session",sessionStorage)
        return true;
    }
    return false;
  }

  canAccess(){
    if (!this.isAuthenticated()) {
        //redirect to login
        this.router.navigate(['/login']);
    }
  }
  extractUidFromIdToken(idToken: string | null): string {
    if (!idToken) {
      throw new Error('idToken is null');
    }
    const parts = idToken.split('.');
    const payload = atob(parts[1]);
    const jsonPayload = JSON.parse(payload);
    const uid = jsonPayload.user_id;

    return uid;
  }
  canAuthenticate(){
    if (this.isAuthenticated()) {
      // this.http.get('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAtGh9bxn0YrtajsSvvIq1gD5XioU8AuYc',)


        const uid =this.extractUidFromIdToken(sessionStorage.getItem("token"));
        console.log("this is uid",uid);
        // You can use the uid as needed

      if (uid=="OfgaVpOkTxRADtuJhdWM7GyQRg33"){
      console.log("admindashboardcalling")
        this.router.navigate(['/admindashboard'])
      }
      else{
       //redirect to dashboard
        this.router.navigate(['/dashboard']);
      }
    }
  }

  register(name:string,email:string,password:string){
      //send data to register api (firebase)
     return this.http
      .post<{idToken:string}>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAtGh9bxn0YrtajsSvvIq1gD5XioU8AuYc',
          {displayName:name,email,password}
      );
  }

    storeToken(token:string){
      sessionStorage.setItem('token',token);
  }




  login(email:string,password:string){
    //send data to login api (firebase)
      return this.http
      .post<{idToken:string}>(
          'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAtGh9bxn0YrtajsSvvIq1gD5XioU8AuYc',
          { email, password }
      );
  }

  detail(){
    let token = sessionStorage.getItem('token');

    return this.http.post<{users:Array<{localId:string,displayName:string}>}>(
        'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyAtGh9bxn0YrtajsSvvIq1gD5XioU8AuYc',
        {idToken:token}
    );
  }

  removeToken(){
   sessionStorage.removeItem('token');
 }



}
