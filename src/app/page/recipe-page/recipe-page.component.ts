import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/modal/recipe';
import { RecipeServiceService } from 'src/services/recipe-service.service';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.css'],
})
export class RecipePageComponent implements OnInit {
  public recipe: Recipe = {
    recipeid: '',
    recipename: '',
    img: '',
    chefid: '',
    chefname: '',
    cheffollowercount: 0,
  };
  recipeid: any;
  constructor(
    private _RecipeService: RecipeServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  recipeList: any;
  ngOnInit() {
    this.recipeid = this.route.snapshot.paramMap.get('recipeid');
    if (this.recipeid != null && this.recipeid != '') {
      this.getSimilarRecipeList();
    } else {
      this.recipeid = '';
    }
    this.getRecipe();
    this.getSimilarRecipeList();
  }
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
  getRecipe() {
    var recipeid = 'rec4';
    this._RecipeService.getRecipe(recipeid).subscribe((response: Recipe) => {
      //this.userInfo = response;
      //return;
      this.recipe = response;
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
  getSimilarRecipeList() {
    this._RecipeService.getRecipeList('').subscribe((response: Recipe[]) => {
      this.recipeList = response;
    });
  }
  gotochefpage(chefid: string) {
    this.router.navigate(['chef'], { queryParams: { chefid: chefid } });
  }
}
