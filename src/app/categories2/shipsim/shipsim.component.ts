import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipsim',
  templateUrl: './shipsim.component.html',
  styleUrls: ['./shipsim.component.css']
})
export class ShipsimComponent implements OnInit {

  aimages:any=["/assets/images/ssri1.jpg", "/assets/images/ssri2.jpg", "/assets/images/ssri3.jpg", "/assets/images/ssri4.jpg", "/assets/images/ssri5.jpg", "/assets/images/ssri6.jpg"];

  castimages:any=["/assets/images/ellen.jpg","/assets/images/damon.jpg","/assets/images/mark.jpg","/assets/images/steve.jpg","/assets/images/karin.jpg"];

  constructor() { }

  ngOnInit() {
  }

}
