import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormArray } from '@angular/forms';
import { Ingredient } from 'src/app/modal/ingredient';
import { Recipe } from 'src/app/modal/recipe';
import { IngredientService } from 'src/services/ingredient.service';
import { RecipeServiceService } from 'src/services/recipe-service.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent implements OnInit {
  name = '';
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
          checked: true,
        },
        {
          id: 2,
          name: 'Japanese',
          checked: true,
        },
        {
          id: 3,
          name: 'American',
          checked: true,
        },
      ],
    },
  ];
  searchtext = '';
  listofrecipe = ['r1', 'r1', 'r1'];
  recipeList: any;
  recipeSearchList: any;
  TBsearchingredient: any;
  ingredientSearchList: any;
  lengthofingredientSearchList: number = 0;
  lengthofrecipeSearchList: number = 0;
  constructor(
    private formBuilder: FormBuilder,
    private _RecipeService: RecipeServiceService,
    private _IngredientService: IngredientService
  ) {}
  listofsearchaname = [
    { name: 'Krishnan', id: 1 },
    { name: 'Dhivya', id: 2 },
    { name: 'Vihaan', id: 3 },
    { name: 'Prasad', id: 4 },
    { name: 'Girija', id: 5 },
    { name: 'Krishnan Aarthi', id: 6 },
  ];
  ngOnInit() {
    this.getSimilarRecipeList();
  }
  onkeypress(e: any) {
    this.filterByValue();
  }
  filterByValue() {
    var value = 'name';
    if (this.searchtext.length > 0) {
      this._RecipeService
        .getRecipeSearchList(this.searchtext.toLowerCase())
        .subscribe((response: Recipe[]) => {
          this.lengthofrecipeSearchList = response.length;
          this.recipeSearchList = response;
        });
    }
  }
  getSimilarRecipeList() {
    this._RecipeService.getRecipeList('').subscribe((response: Recipe[]) => {
      this.recipeList = response;
    });
  }
  oningredientkeypress(e: any) {
    this.getIngredientSearchList();
  }
  getIngredientSearchList() {
    this._IngredientService
      .getIngredientSearch(this.TBsearchingredient.toLowerCase())
      .subscribe((response: Ingredient[]) => {
        this.lengthofingredientSearchList = response.length;
        this.ingredientSearchList = response;
      });
  }
}
