import { Component, OnInit } from '@angular/core';
import { Chef } from 'src/app/modal/chef';
import { ChefService } from 'src/services/chef.service';

@Component({
  selector: 'app-search-chef-page',
  templateUrl: './search-chef-page.component.html',
  styleUrls: ['./search-chef-page.component.css'],
})
export class SearchChefPageComponent implements OnInit {
  constructor(private _chefService: ChefService) {}
  chefList: any;
  lengthofchefSearchList: number = 0;
  searchchefnametext: any;
  categoryitem = [
    {
      groupname: 'Type',
      items: [
        {
          id: 1,
          name: 'Veg',
          checked: true,
        },
        {
          id: 2,
          name: 'Non Veg',
          checked: true,
        },
        {
          id: 3,
          name: 'Egg',
          checked: true,
        },
      ],
    },
    {
      groupname: 'Cuisine',
      items: [
        {
          id: 1,
          name: 'Indian',
          checked: false,
        },
        {
          id: 2,
          name: 'Japanese',
          checked: false,
        },
        {
          id: 3,
          name: 'American',
          checked: false,
        },
      ],
    },
  ];
  ngOnInit(): void {
    if (this.searchchefnametext == null) {
      this.searchchefnametext == '';
    }
    this.getSearchChefList();
  }
  onkeypress(e: any) {
    this.getSearchChefList();
  }
  getSearchChefList() {
    this._chefService
      .getSearchChefList(this.searchchefnametext)
      .subscribe((response: Chef[]) => {
        this.chefList = response;
        // this.recipe.per_page = response?.per_page;
        // //this.userInfo.support = response.support;
        // this.recipe.total = response?.total;
        // this.recipe.total_pages = response?.total_pages;
        // this.recipe.data = response?.data?.map((item) => {
        //   var user = {} as User;
        //   user.avatar = item?.avatar;
        //   user.email = item?.email;
        //   user.first_name = item?.first_name;
        //   user.last_name = item?.last_name;
        //   user.id = item?.id;
        //   return user;
        // });
      });
  }
}
