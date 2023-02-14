import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chef-page',
  templateUrl: './chef-page.component.html',
  styleUrls: ['./chef-page.component.css'],
})
export class ChefPageComponent implements OnInit {
  activesection = 'recipe';
  constructor() {}

  ngOnInit(): void {}
  sectionload(sec: string) {
    this.activesection = sec;
    
  }
}
