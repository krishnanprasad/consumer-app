import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/modal/recipe';
import { RecipeServiceService } from 'src/services/recipe-service.service';

@Component({
  selector: 'app-section-d',
  templateUrl: './section-d.component.html',
  styleUrls: ['./section-d.component.css'],
})
export class SectionDComponent implements OnInit {
  recipeList!: Recipe[];

  constructor(private _RecipeService: RecipeServiceService) {}
  listofrecipe = ['r1', 'r1', 'r1'];
  ngOnInit() {
    this.getRecipeList();
  }
  getRecipeList() {
    this._RecipeService.getRecipeList('').subscribe((response: Recipe[]) => {
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
