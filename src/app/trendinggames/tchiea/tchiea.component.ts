import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tchiea',
  templateUrl: './tchiea.component.html',
  styleUrls: ['./tchiea.component.css']
})
export class TchieaComponent implements OnInit {

  aimages:any=[ "/assets/images/tchia1.jpeg", "/assets/images/tchia2.jpg", "/assets/images/tchia3.jpg", "/assets/images/tchia4.jpg", "/assets/images/tchia5.jpg", "/assets/images/tchia6.jpg",];

  castimages:any=["/assets/images/cbc1.jpg","/assets/images/cbckb2.jpg","/assets/images/cbcdp3.jpg","/assets/images/cbcdt4.jpg","/assets/images/cbcdg5.jpg"];

  constructor() { }

  ngOnInit() {
  }

}
