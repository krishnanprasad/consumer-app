import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './common/home-page/home-page.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
