import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/modal/recipe';
import { RecipeServiceService } from 'src/services/recipe-service.service';

@Component({
  selector: 'app-chef-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipeList: any;
  chef_id: any;
  constructor(
    private _RecipeService: RecipeServiceService,
    private route: ActivatedRoute
  ) {}
  listofrecipe = ['r1', 'r1', 'r1', 'r2'];
  ngOnInit() {
    this.chef_id = this.route.snapshot.paramMap.get('chef_id');
    if (this.chef_id != null && this.chef_id != '') {
      this.getSimilarRecipeList();
    } else {
      this.chef_id = '';
    }
  }
  getSimilarRecipeList() {
    this._RecipeService
      .getRecipeList(this.chef_id)
      .subscribe((response: Recipe[]) => {
        this.recipeList = response;
      });
  }
}
