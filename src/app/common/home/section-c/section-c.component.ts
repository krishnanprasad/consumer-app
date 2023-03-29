import { Component, OnInit } from '@angular/core';
import { Chef } from 'src/app/modal/chef';
import { ChefService } from 'src/services/chef.service';

@Component({
  selector: 'app-section-c',
  templateUrl: './section-c.component.html',
  styleUrls: ['./section-c.component.css'],
})
export class SectionCComponent implements OnInit {
  chiefList: any;

  constructor(private _chefService: ChefService) {}

  ngOnInit(): void {}
  getChefList() {
    this._chefService.getChefList('').subscribe((response: Chef[]) => {
      //this.userInfo = response;
      //return;
      this.chiefList = response;
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
