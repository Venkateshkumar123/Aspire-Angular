import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sekiro',
  templateUrl: './sekiro.component.html',
  styleUrls: ['./sekiro.component.css']
})
export class SekiroComponent implements OnInit {

  aimages:any=["/assets/images/sdtri7.jpg", "/assets/images/sdtri2.jpg", "/assets/images/sdtri3.jpg", "/assets/images/sdtri4.jpg", "/assets/images/sdtri5.jpg", "/assets/images/sdtri6.jpg"];

  castimages:any=["/assets/images/daisuke.jpg","/assets/images/miyuki.jpg","/assets/images/jin.jpg","/assets/images/risa.jpg","/assets/images/shizuka.jpg"];

  constructor() { }

  ngOnInit() {
  }

}
