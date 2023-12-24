import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gtavimages',
  templateUrl: './gtavimages.component.html',
  styleUrls: ['./gtavimages.component.css']
})
export class GtavimagesComponent implements OnInit {

  dsimages:any=["assets/images/ilgtavsi0.jpg", "assets/images/ilgtavsi2.jpg","assets/images/ilgtavsi3.jpg","assets/images/ilgtavsi4.jpg"]




  constructor() { }

  ngOnInit(): void{}



}


