import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plaguetale',
  templateUrl: './plaguetale.component.html',
  styleUrls: ['./plaguetale.component.css']
})
export class PlaguetaleComponent implements OnInit {


  aimages:any=["/assets/images/ptiri1.jpg", "/assets/images/ptiri2.jpg", "/assets/images/ptiri3.jpeg", "/assets/images/ptiri4.png", "/assets/images/ptiri5.jpg", "/assets/images/ptiri6.jpg"];

  castimages:any=["/assets/images/Charlotte.jpg","/assets/images/Logan.jpg","/assets/images/Edan.jpg","/assets/images/Tabitha.jpg","/assets/images/Healy.jpg"];

  constructor() { }

  ngOnInit() {
  }

}
