import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-godofwar',
  templateUrl: './godofwar.component.html',
  styleUrls: ['./godofwar.component.css']
})
export class GodofwarComponent implements OnInit {


  aimages:any=["/assets/images/gowri1.jpg", "/assets/images/gowri2.jpg", "/assets/images/gowri3.jpg", "/assets/images/gowri4.jpg", "/assets/images/gowri5.jpg", "/assets/images/gowri6.jpg"];

  castimages:any=["/assets/images/christopher.jpg","/assets/images/sunny.jpg","/assets/images/danielle.jpg","/assets/images/robert.jpg","/assets/images/adam.jpg"];

  constructor() { }

  ngOnInit() {
  }

}
