import { Component, Input, OnInit } from '@angular/core';
import { Chef } from 'src/app/modal/chef';

@Component({
  selector: 'app-influencer-card',
  templateUrl: './influencer-card.component.html',
  styleUrls: ['./influencer-card.component.css'],
})
export class InfluencerCardComponent implements OnInit {
  listOfChefs: Chef[] = [];
  constructor() {}
  @Input() chef: any;
  ngOnInit(): void {
    this.listOfChefs = [
      {
        chefid: '1',
        chefname: 'Firstname',
        chefimgurl: 'img',
        totalfollowers: 12314,
      },
      {
        chefid: '3',
        chefname: 'Firstname',
        chefimgurl: 'img',
        totalfollowers: 1000,
      },
      {
        chefid: '2',
        chefname: 'Firstname',
        chefimgurl: 'img',
        totalfollowers: 123213,
      },
      {
        chefid: '1',
        chefname: 'Firstname',
        chefimgurl: 'img',
        totalfollowers: 420,
      },
    ];
  }
}
