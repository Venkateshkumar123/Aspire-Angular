import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flightsim',
  templateUrl: './flightsim.component.html',
  styleUrls: ['./flightsim.component.css']
})
export class FlightsimComponent implements OnInit {

  aimages:any=["/assets/images/mfsri1.jpg", "/assets/images/mfsri2.jpg", "/assets/images/mfsri3.jpg", "/assets/images/mfsri4.jpg", "/assets/images/mfsri5.png", "/assets/images/mfsri6.jpg"];

  castimages:any=["/assets/images/ellen.jpg","/assets/images/damon.jpg","/assets/images/mark.jpg","/assets/images/steve.jpg","/assets/images/karin.jpg"];


  constructor() { }

  ngOnInit() {
  }

}
