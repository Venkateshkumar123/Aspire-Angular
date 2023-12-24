import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fortnite',
  templateUrl: './fortnite.component.html',
  styleUrls: ['./fortnite.component.css']
})
export class FortniteComponent implements OnInit {

  aimages:any=["/assets/images/fnri1.jpg",   "/assets/images/fnri2.jpg",   "/assets/images/fnri3.jpg",    "/assets/images/fnri4.jpg",   "/assets/images/fnri5.jpg",   "/assets/images/fnri6.jpg",];

  castimages:any=["/assets/images/fortniteaa0.jpg","/assets/images/fortnitedb1.jpg","/assets/images/fortniteab2.jpg","/assets/images/fortnitedc3.jpg","/assets/images/fortniteed4.jpg"];

  constructor() { }

  ngOnInit() {
  }

}
