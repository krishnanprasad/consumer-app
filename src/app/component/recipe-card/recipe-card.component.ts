import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/modal/recipe';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css'],
})
export class RecipeCardComponent implements OnInit {
  listofRecipes: Recipe[] = [];
  constructor() {}

  ngOnInit(): void {
    this.listofRecipes = [
      {
        chefid: '1',
        recipename: 'test',
        img: '',
        cheffollowercount: 100,
        recipetime: 200,
        veg: true,
        recipeid: '1',
        recipecuisine: 'South Indian',
        chefname: 'test',
      },
      // {
      //   chefid: '1',
      //   name: 'test 2',
      //   img: '',
      //   cheffollowercount: 500,
      //   duration: 200,
      //   veg: true,
      //   recipeid: '1',
      //   recipetype: 'South Indian',
      //   chefname: 'test',
      // },
      // {
      //   chefid: '1',
      //   name: 'test 4',
      //   img: '',
      //   cheffollowercount: 1000,
      //   duration: 200,
      //   veg: true,
      //   recipeid: '1',
      //   recipetype: 'South Indian',
      //   chefname: 'test',
      // },
    ];
  }
}
