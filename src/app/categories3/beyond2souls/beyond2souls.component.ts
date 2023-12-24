import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beyond2souls',
  templateUrl: './beyond2souls.component.html',
  styleUrls: ['./beyond2souls.component.css']
})
export class Beyond2soulsComponent implements OnInit {


  aimages:any=["/assets/images/btsri1.jpg", "/assets/images/btsri2.jpg", "/assets/images/btsri3.jpg", "/assets/images/btsri4.jpg", "/assets/images/btsri5.jpg", "/assets/images/btsri6.jpg"];

  castimages:any=["/assets/images/elliot.jpg","/assets/images/william.jpg","/assets/images/eric.jpg","/assets/images/kadeem.jpg","/assets/images/caroline.jpg"];

  constructor() { }

  ngOnInit() {
  }

}
