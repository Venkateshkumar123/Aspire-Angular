import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roadsim',
  templateUrl: './roadsim.component.html',
  styleUrls: ['./roadsim.component.css']
})
export class RoadsimComponent implements OnInit {

  aimages:any=["/assets/images/rsri6.jpg", "/assets/images/rsri2.jpg", "/assets/images/rsri3.jpg", "/assets/images/rsri4.jpg", "/assets/images/rsri5.jpg", "/assets/images/rsri6.jpg"];

  castimages:any=["/assets/images/ellen.jpg","/assets/images/damon.jpg","/assets/images/mark.jpg","/assets/images/steve.jpg","/assets/images/karin.jpg"];

  constructor() { }

  ngOnInit() {
  }

}
