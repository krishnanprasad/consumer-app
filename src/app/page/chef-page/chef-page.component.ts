import { Component, OnInit } from '@angular/core';
import { Chef } from 'src/app/modal/chef';
import { ChefService } from 'src/services/chef.service';

@Component({
  selector: 'app-chef-page',
  templateUrl: './chef-page.component.html',
  styleUrls: ['./chef-page.component.css'],
})
export class ChefPageComponent implements OnInit {
  activesection = 'recipe';
  constructor(private _ChefService: ChefService) {}

  ngOnInit() {
    this.getChefDetail();
  }
  sectionload(sec: string) {
    this.activesection = sec;
  }
  chefDetail: Chef | undefined;

  getChefDetail() {
    var chefid = 'infid_3';
    this._ChefService.getChefDetail(chefid).subscribe((response: Chef) => {
      //this.userInfo = response;
      //return;
      this.chefDetail = response;
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
