import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crimebosscity',
  templateUrl: './crimebosscity.component.html',
  styleUrls: ['./crimebosscity.component.css']
})
export class CrimebosscityComponent implements OnInit {

  aimages:any=["/assets/images/cb.jpg", "/assets/images/cbri1.jpg", "/assets/images/cbri6.jpg", "/assets/images/cbri3.jpg", "/assets/images/cbri4.jpg", "/assets/images/cbri5.jpg"];

  castimages:any=["/assets/images/cbc1.jpg","/assets/images/cbckb2.jpg","/assets/images/cbcdp3.jpg","/assets/images/cbcdt4.jpg","/assets/images/cbcdg5.jpg"];

  constructor() { }

  ngOnInit(): void {
  }

}
