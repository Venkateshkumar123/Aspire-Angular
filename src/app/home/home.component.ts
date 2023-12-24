import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images:any = [ "assets/images/fort1.jpg","assets/images/Gtav0.jpg", "assets/images/gg0.jpg","assets/images/gta47.jpg","assets/images/cp0.jpg","assets/images/codc1.jpg",
  "assets/images/bs0.jpg","assets/images/cs1.jpg","assets/images/fs1.jpg","assets/images/ss0.jpg", "assets/images/rws1.jpg","assets/images/ts1.jpg",
  "assets/images/gowr0.jpg", "assets/images/pti0.jpg","assets/images/ptr0.jpg","assets/images/bts0.jpg", "assets/images/gg0.jpg","assets/images/ss7.jpg","assets/images/nfsp0.jpg","assets/images/mgp0.jpg",

  "assets/images/c21.jpg","assets/images/dr0.png","assets/images/fh50.jpg","assets/images/fh40.jpg",];
  constructor() { }

  ngOnInit(): void {
  }

}
