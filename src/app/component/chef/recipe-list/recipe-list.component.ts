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
  inf_id: any;
  constructor(
    private _RecipeService: RecipeServiceService,
    private route: ActivatedRoute
  ) {}
  listofrecipe = ['r1', 'r1', 'r1', 'r2'];
  ngOnInit() {
    this.inf_id = this.route.snapshot.paramMap.get('inf_id');
    if (this.inf_id != null && this.inf_id != '') {
      this.getSimilarRecipeList();
    } else {
      this.inf_id = '';
    }
  }
  getSimilarRecipeList() {
    this._RecipeService
      .getRecipeList(this.inf_id)
      .subscribe((response: Recipe[]) => {
        this.recipeList = response;
      });
  }
}
