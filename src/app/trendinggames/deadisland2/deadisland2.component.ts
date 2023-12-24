import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deadisland2',
  templateUrl: './deadisland2.component.html',
  styleUrls: ['./deadisland2.component.css']
})
export class Deadisland2Component implements OnInit {


  aimages:any=["/assets/images/di2ri1.jpg",  "/assets/images/di2ri2.jpg",  "/assets/images/di2ri3.jpg",  "/assets/images/di2ri4.jpg", "/assets/images/di2ri5.jpg", "/assets/images/di2ri6.jpg",];

  castimages:any=["/assets/images/di2sb0.jpg","/assets/images/di2jr1.jpg","/assets/images/di2cr.jpg","/assets/images/di2mf3.jpg","/assets/images/di2om4.jpg"];

  constructor() { }

  ngOnInit() {
  }

}
