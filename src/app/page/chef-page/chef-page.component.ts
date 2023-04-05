import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chef } from 'src/app/modal/chef';
import { Recipe } from 'src/app/modal/recipe';
import { ChefService } from 'src/services/chef.service';
import { RecipeServiceService } from 'src/services/recipe-service.service';

@Component({
  selector: 'app-chef-page',
  templateUrl: './chef-page.component.html',
  styleUrls: ['./chef-page.component.css'],
})
export class ChefPageComponent implements OnInit {
  activesection = 'recipe';
  chefid: any;
  recipeList: any;
  constructor(
    private _ChefService: ChefService,
    private route: ActivatedRoute,
    private _RecipeService: RecipeServiceService
  ) {}

  ngOnInit() {
    this.chefid = this.route.snapshot.paramMap.get('chefid');
    if (this.chefid != null && this.chefid != '') {
      this.getChefDetail();
      this.getRecipeListOfChef();
    } else {
      this.chefid = '';
    }
  }
  sectionload(sec: string) {
    this.activesection = sec;
  }
  chefDetail: Chef | undefined;

  getChefDetail() {
    var chefid = this.chefid;
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
  getRecipeListOfChef() {
    this._RecipeService
      .getRecipeList(this.chefid)
      .subscribe((response: Recipe[]) => {
        //this.userInfo = response;
        //return;
        this.recipeList = response;
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
