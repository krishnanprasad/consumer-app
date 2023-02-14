import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.css'],
})
export class RecipePageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  listofsteps = [
    {
      detail:
        'Separate the egg yolks and whites. Whisk the yolks with black pepper and set aside.',
    },
    {
      detail:
        'Separate the egg yolks and whites. Whisk the yolks with black pepper and set aside.',
    },
    {
      detail:
        'Separate the egg yolks and whites. Whisk the yolks with black pepper and set aside.',
    },
    {
      detail:
        'Separate the egg yolks and whites. Whisk the yolks with black pepper and set aside.',
    },
    {
      detail:
        'Separate the egg yolks and whites. Whisk the yolks with black pepper and set aside.',
    },
  ];
  ingredientlist = [
    {
      iname: 'Eggs',
      iquantity: '2',
      iimg: 'egg.avif',
    },
    {
      iname: 'Sugar',
      iquantity: '3/4 cup',
      iimg: 'sugar.avif',
    },
    {
      iname: 'Oil',
      iquantity: '1/4 Cup',
      iimg: 'oil.avif',
    },
    {
      iname: 'Vanilla extract (or few drops of Strawberry essence)',
      iquantity: '1.5 tsp',
      iimg: 'egg.avif',
    },
    {
      iname: 'Maida',
      iquantity: '1 cup',
      iimg: 'maida.avif',
    },
    {
      iname: 'baking powder',
      iquantity: '1 tsp',
      iimg: 'bakingpowder.avif',
    },
    {
      iname: 'Salt',
      iquantity: '1/4 tsp',
      iimg: 'salt.avif',
    },
    {
      iname: 'Milk',
      iquantity: '2 tbsp',
      iimg: 'milk.avif',
    },
  ];
  listofrecipe = ['r1', 'r1', 'r1', 'r1'];
  cookingtime = {
    cookingtime: '45 Mins',
    cookingtype: 'Desert,Cake',
  };
}
