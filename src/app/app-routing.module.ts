import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomePageComponent } from './admin/admin-home-page/admin-home-page.component';
import { CreateRecipeComponent } from './admin/create-recipe/create-recipe.component';
import { AppComponent } from './app.component';
import { HomePageComponent } from './common/home-page/home-page.component';
import { CartPageComponent } from './page/cart-page/cart-page.component';
import { ChefPageComponent } from './page/chef-page/chef-page.component';
import { RecipePageComponent } from './page/recipe-page/recipe-page.component';
import { SearchChefPageComponent } from './page/search-chef-page/search-chef-page.component';
import { SearchPageComponent } from './page/search-page/search-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'search', //To account for old URL
    component: SearchPageComponent,
  },
  {
    path: 'recipe/:recipeid', //recipe card without params
    component: RecipePageComponent,
  },
  {
    path: 'chef/:inf_id', //recipe card without params
    component: ChefPageComponent,
  },
  {
    path: 'cart', //recipe card without params
    component: CartPageComponent,
  },
  {
    path: 'createrecipe', //recipe card without params
    component: CreateRecipeComponent,
  },
  {
    path: 'admin', //Admin Home Page
    component: AdminHomePageComponent,
  },
  {
    path: 'searchchef', //recipe card without params
    component: SearchChefPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
