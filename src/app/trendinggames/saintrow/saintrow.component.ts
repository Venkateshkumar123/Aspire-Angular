import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saintrow',
  templateUrl: './saintrow.component.html',
  styleUrls: ['./saintrow.component.css']
})
export class SaintrowComponent implements OnInit {

  aimages:any=["/assets/images/srpri1.jpg",  "/assets/images/srpri2.jpg",  "/assets/images/srpri3.jpg",  "/assets/images/srpri4.jpg",  "/assets/images/srpri5.jpg",  "/assets/images/srpri6.jpg",];

  castimages:any=["/assets/images/srpemm0.jpg","/assets/images/srpewl1.jpg","/assets/images/srpeca2.jpg","/assets/images/srpebc3.jpg","/assets/images/srpejt4.jpg"];

  constructor() { }

  ngOnInit() {
  }

}
