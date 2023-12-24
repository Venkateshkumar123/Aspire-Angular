import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nfs',
  templateUrl: './nfs.component.html',
  styleUrls: ['./nfs.component.css']
})
export class NfsComponent implements OnInit {

  aimages:any=["/assets/images/nfspri1.jpg", "/assets/images/nfspri2.jpg", "/assets/images/nfspri3.jpg", "/assets/images/nfspri4.jpg", "/assets/images/nfspri5.jpg", "/assets/images/nfspri6.jpg"];

  castimages:any=["/assets/images/elliot.jpg","/assets/images/william.jpg","/assets/images/eric.jpg","/assets/images/kadeem.jpg","/assets/images/caroline.jpg"];

  constructor() { }

  ngOnInit() {
  }

}
