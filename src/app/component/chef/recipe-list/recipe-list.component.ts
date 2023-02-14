import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chef-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  constructor() {}
  listofrecipe = ['r1', 'r1', 'r1', 'r2'];
  ngOnInit(): void {}
}
