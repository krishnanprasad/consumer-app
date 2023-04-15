import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/modal/recipe';
import { RecipeServiceService } from 'src/services/recipe-service.service';
import {
  DomSanitizer,
  SafeResourceUrl,
  SafeUrl,
} from '@angular/platform-browser';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.css'],
})
export class RecipePageComponent implements OnInit {
  public recipe: Recipe = {
    recipeid: '',
    recipename: '',
    recipeimage: '',
    chefid: '',
    chefname: '',
    cheffollowercount: 0,
    type: 0,
    recipevideosrc: '',
    chefimgurl: 'ks',
  };
  recipeid: any;
  sanitizeYoutubeURL: any;
  constructor(
    private _RecipeService: RecipeServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
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

  getRecipe() {
    var recipeid = this.recipeid;
    this._RecipeService.getRecipe(recipeid).subscribe((response: Recipe) => {
      //this.userInfo = response;

      //return;
      this.recipe = response;
      this.sanitizeYoutubeURL =
        'https://www.youtube.com/embed/' + this.recipe.recipevideosrc;
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
    this.router.navigate(['chef/' + chefid]);    
  }
  getSanitizedURL() {
    return this.sanitizer.bypassSecurityTrustUrl(
      'https://www.youtube.com/embed/D_fYk8mBaF4'
    );
  }
}
