import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/modal/ingredient';
import { IngredientService } from 'src/services/ingredient.service';

@Component({
  selector: 'app-section-b',
  templateUrl: './section-b.component.html',
  styleUrls: ['./section-b.component.css'],
})
export class SectionBComponent implements OnInit {
  listOfCategory: any = [];
  listOfCategory1: any = [];
  listOfCategory2: any = [];
  ingredientList: any;
  constructor(private _ingredientService: IngredientService) {}

  ngOnInit(): void {
    this.getRecommendedIngredientList();
  }
  getRecommendedIngredientList() {
    this._ingredientService
      .getIngredientRecommendedList()
      .subscribe((response: Ingredient[]) => {
        this.ingredientList = response;
      });
  }
}
