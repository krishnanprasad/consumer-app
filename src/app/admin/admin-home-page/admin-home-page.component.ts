import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.css'],
})
export class AdminHomePageComponent implements OnInit {
  currentsection: any = 'createchefaccount';
  constructor() {}

  ngOnInit(): void {}
  changesection(section: any) {
    this.currentsection = section;
  }
  
}
