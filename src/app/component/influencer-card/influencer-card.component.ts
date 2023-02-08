import { Component, OnInit } from '@angular/core';
import { Chef } from 'src/app/modal/chef';

@Component({
  selector: 'app-influencer-card',
  templateUrl: './influencer-card.component.html',
  styleUrls: ['./influencer-card.component.css'],
})
export class InfluencerCardComponent implements OnInit {
  listOfChefs: Chef[] = [];
  constructor() {}

  ngOnInit(): void {
    this.listOfChefs = [
      {
        chefid: '1',
        firstname: 'Firstname',
        lastname: 'lastname',
        img: 'img',
        followercount: 12314,
      },
      {
        chefid: '3',
        firstname: 'Firstname',
        lastname: 'lastname',
        img: 'img',
        followercount: 1000,
      },
      {
        chefid: '2',
        firstname: 'Firstname',
        lastname: 'lastname',
        img: 'img',
        followercount: 123213,
      },
      {
        chefid: '1',
        firstname: 'Firstname',
        lastname: 'lastname',
        img: 'img',
        followercount: 123,
      },
    ];
  }
}
