import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plaguetalerequiem',
  templateUrl: './plaguetalerequiem.component.html',
  styleUrls: ['./plaguetalerequiem.component.css']
})
export class PlaguetalerequiemComponent implements OnInit {


  aimages:any=["/assets/images/ptrri1.jpg", "/assets/images/ptrri2.jpg", "/assets/images/ptrri3.jpg", "/assets/images/ptrri4.jpg", "/assets/images/ptrri5.jpg", "/assets/images/ptrri6.jpg"];

  castimages:any=["/assets/images/Charlotte.jpg","/assets/images/Logan.jpg","/assets/images/Edan.jpg","/assets/images/Tabitha.jpg","/assets/images/Healy.jpg"];

  constructor() { }

  ngOnInit() {
  }

}
