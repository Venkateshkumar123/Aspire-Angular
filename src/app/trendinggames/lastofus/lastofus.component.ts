import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lastofus',
  templateUrl: './lastofus.component.html',
  styleUrls: ['./lastofus.component.css']
})
export class LastofusComponent implements OnInit {

  aimages:any=["/assets/images/louri1.jpg", "/assets/images/louri2.jpg", "/assets/images/louri3.jpg", "/assets/images/louri4.jpg", "/assets/images/louri5.jpg", "/assets/images/louri6.jpg",];

  castimages:any=["/assets/images/loutb0.jpg","/assets/images/louaj1.jpg","/assets/images/louhh2.jpg","/assets/images/loujp.jpg","/assets/images/louaw4.jpg"];

  constructor() { }

  ngOnInit() {
  }

}
