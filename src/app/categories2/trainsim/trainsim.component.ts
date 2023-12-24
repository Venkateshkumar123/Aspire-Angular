import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainsim',
  templateUrl: './trainsim.component.html',
  styleUrls: ['./trainsim.component.css']
})
export class TrainsimComponent implements OnInit {

  aimages:any=["/assets/images/tsri1.jpg", "/assets/images/tsri2.jpg", "/assets/images/tsri3.jpg", "/assets/images/tsri4.jpg", "/assets/images/tsri5.jpg", "/assets/images/tsri6.jpg"];

  castimages:any=["/assets/images/ellen.jpg","/assets/images/damon.jpg","/assets/images/mark.jpg","/assets/images/steve.jpg","/assets/images/karin.jpg"];

  constructor() { }

  ngOnInit() {
  }

}
