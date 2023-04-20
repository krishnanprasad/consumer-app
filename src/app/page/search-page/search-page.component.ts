import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormArray } from '@angular/forms';
import { category } from 'src/app/modal/category';
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
  categoryitem: category[] = [
    {
      groupname: 'Type',
      items: [
        {
          checked: true,
          name: 'Veg',
          id: '1',
        },
        {
          checked: true,
          name: 'Non-Veg',
          id: '2',
        },
      ],
    },
    {
      groupname: 'Cuisine',
      items: [
        {
          id: '1',
          name: 'Indian',
          checked: false,
        },
        {
          id: '2',
          name: 'Japanese',
          checked: false,
        },
        {
          id: '3',
          name: 'American',
          checked: true,
        },
      ],
    },
  ];
  showFilterMobile: any;
  combinedRecipeFilter: any;
  searchtext = '';
  listofrecipe = ['r1', 'r1', 'r1'];
  recipeList: any;
  recipeSearchList: any;
  TBsearchingredient: any;
  ingredientSearchList: any;
  lengthofingredientSearchList: number = 0;
  lengthofrecipeSearchList: number = 0;
  ingredientFilterArray: string[] = [];
  cuisinelist: string[] = [];
  cusinestype: string[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private _RecipeService: RecipeServiceService,
    private _IngredientService: IngredientService
  ) {}

  ngOnInit() {
    this.getSimilarRecipeList();
    this.getCuisineList();
  }
  getCuisineList() {
    this._RecipeService.getCuisineList().subscribe((response: string[]) => {
      let firstChar: any;
      // TO REMOVE FIRST CHARECTER IF THERE IS SPACE
      response.forEach((element) => {
        firstChar = element;

        if (firstChar[0] === ' ') {
          firstChar = firstChar.trimLeft();
        }
        if (!this.cuisinelist.includes(firstChar)) {
          this.cuisinelist.push(firstChar);
        }
      });
    });
  }
  onkeypress(e: any) {
    this.getRecipeList();
  }
  getRecipeList() {
    this.combinedRecipeFilter = {
      category: this.categoryitem,
      text: this.searchtext,
      ingredients: this.ingredientFilterArray,
      cuisinetype: this.cusinestype,
    };

    this._RecipeService
      .getRecipeSearchList(this.combinedRecipeFilter)
      .subscribe((response: Recipe[]) => {
        this.lengthofrecipeSearchList = response.length;
        this.recipeList = response;
      });
  }
  getSimilarRecipeList() {
    this._RecipeService.getRecipeList('').subscribe((response: Recipe[]) => {
      this.recipeList = response;
    });
  }
  filtercategory() {
    this.categoryitem
      .filter((element) => element.items.some((item) => item.checked === true))
      .map((element) => {
        let n = Object.assign({}, element, {
          items: element.items.filter((item) => item.checked === true),
        });
        return n;
      });
  }
  oningredientkeypress(e: any) {
    this.getIngredientSearchList();
  }
  getIngredientSearchList() {
    this._IngredientService
      .getIngredientSearch(this.TBsearchingredient)
      .subscribe((response: Ingredient[]) => {
        this.lengthofingredientSearchList = response.length;
        this.ingredientSearchList = response;
      });
  }
  addingredientintosearch(value: string) {
    this.ingredientFilterArray.push(value);
    this.getRecipeList();
  }
  removingredientintosearch(value: string) {
    this.ingredientFilterArray.forEach((item, index) => {
      if (item === value) {
        this.ingredientFilterArray.splice(index, 1);
      }
    });
    this.getRecipeList();
  }

  onChange(data: string, isChecked: any) {
    if (isChecked.checked) {
      this.cusinestype.push(data);
    } else {
      this.cusinestype.splice(this.cusinestype.indexOf(data), 1);
    }
    this.getRecipeList();
  }
}
