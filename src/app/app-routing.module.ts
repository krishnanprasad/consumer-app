import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './common/home-page/home-page.component';
import { CartPageComponent } from './page/cart-page/cart-page.component';
import { ChefPageComponent } from './page/chef-page/chef-page.component';
import { RecipePageComponent } from './page/recipe-page/recipe-page.component';
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
    path: 'recipe', //recipe card without params
    component: RecipePageComponent,
  },
  {
    path: 'chef', //recipe card without params
    component: ChefPageComponent,
  },
  {
    path: 'cart', //recipe card without params
    component: CartPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
