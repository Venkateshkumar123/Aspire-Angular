import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-constructionsim',
  templateUrl: './constructionsim.component.html',
  styleUrls: ['./constructionsim.component.css']
})
export class ConstructionsimComponent implements OnInit {

  aimages:any=["/assets/images/consimri1.jpg", "/assets/images/consimri2.jpg", "/assets/images/consimri3.jpg", "/assets/images/consimri4.jpg", "/assets/images/consimri5.jpg", "/assets/images/consimri6.jpg"];

  castimages:any=["/assets/images/ellen.jpg","/assets/images/damon.jpg","/assets/images/mark.jpg","/assets/images/steve.jpg","/assets/images/karin.jpg"];

  constructor() { }

  ngOnInit() {
  }

}
