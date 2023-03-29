import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/modal/recipe';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css'],
})
export class RecipeCardComponent implements OnInit {
  listofRecipes: Recipe[] = [];
  constructor(private router: Router) {}
  @Input() recipe: any;

  ngOnInit() {}
  gotochefpage(chefid: string) {
    this.router.navigate(['chef/' + chefid]);
  }
  gotorecipepage(recipeid: string) {
    this.router.navigate(['recipe/' + recipeid]);
  }
}
