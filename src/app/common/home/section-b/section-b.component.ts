import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-b',
  templateUrl: './section-b.component.html',
  styleUrls: ['./section-b.component.css'],
})
export class SectionBComponent implements OnInit {
  listOfCategory: any = [];
  listOfCategory1: any = [];
  listOfCategory2: any = [];
  constructor() {}

  ngOnInit(): void {
    this.listOfCategory = [
      {
        categoryid: 1,
        name: 'Test',
        quicklink: 'test',
      },
      {
        categoryid: 2,
        name: 'Test',
        quicklink: 'test',
      },
      {
        categoryid: 3,
        name: 'Test',
        quicklink: 'test',
      },
      {
        categoryid: 4,
        name: 'Test',
        quicklink: 'test',
      },

      {
        categoryid: 5,
        name: 'Test',
        quicklink: 'test',
      },

      {
        categoryid: 6,
        name: 'Test',
        quicklink: 'test',
      },

      {
        categoryid: 7,
        name: 'Test',
        quicklink: 'test',
      },

      {
        categoryid: 8,
        name: 'Test',
        quicklink: 'test',
      },
    ];

    this.listOfCategory1 = this.listOfCategory.slice(0, 4);
    this.listOfCategory2 = this.listOfCategory.slice(4);
  }
}
