import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { RecipeServiceService } from 'src/services/recipe-service.service';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css'],
})
export class CreateRecipeComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private _RecipeService: RecipeServiceService
  ) {}
  addRecipe: any;
  ngOnInit() {
    this.addRecipe = this.fb.group({
      influencerid: ['', Validators.required],
      recipename: ['', Validators.required],
      ingredient: this.fb.array([]),
      steps: this.fb.array([]),
      duration: [''],
      cuisinetype: [''],
      videourl: ['', Validators.required],
    });
  }
  addIngredient() {
    (this.addRecipe.get('ingredient') as FormArray).push(
      this.createIngredient()
    );
  }

  removeIngredient(index: number) {
    (this.addRecipe.get('ingredient') as FormArray).removeAt(index);
  }

  createIngredient(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      quantity: ['', Validators.required],
    });
  }
  addStep() {
    (this.addRecipe.get('steps') as FormArray).push(this.createSteps());
  }
  createSteps(): FormGroup {
    return this.fb.group({
      steps: ['', Validators.required],
    });
  }
  removeStep(index: number) {
    (this.addRecipe.get('steps') as FormArray).removeAt(index);
  }
  saveRecipe() {
    if (!this.addRecipe.valid) {
      alert('Please Fill Details');
      return;
    }
    var recipe = this.addRecipe.value;
    this._RecipeService.AddRecipe(recipe).subscribe((response: any) => {
      //this.recipe = response;
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
