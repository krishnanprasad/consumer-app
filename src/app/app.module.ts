import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './common/home-page/home-page.component';
import { SectionAComponent } from './common/home/section-a/section-a.component';
import { SectionBComponent } from './common/home/section-b/section-b.component';
import { InfluencerCardComponent } from './component/influencer-card/influencer-card.component';
import { ProductCardComponent } from './component/product-card/product-card.component';
import { SectionCComponent } from './common/home/section-c/section-c.component';
import { SectionDComponent } from './common/home/section-d/section-d.component';
import { RecipeCardComponent } from './component/recipe-card/recipe-card.component';
import { SearchPageComponent } from './page/search-page/search-page.component';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipePageComponent } from './page/recipe-page/recipe-page.component';
import { ChefPageComponent } from './page/chef-page/chef-page.component';
import { AutocompleteFilterPipePipe } from './pipe/autocomplete-filter-pipe.pipe';
import { RecipeListComponent } from './component/chef/recipe-list/recipe-list.component';
import { StoreListComponent } from './component/chef/store-list/store-list.component';
import { CartPageComponent } from './page/cart-page/cart-page.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateRecipeComponent } from './admin/create-recipe/create-recipe.component';
import { AdminHomePageComponent } from './admin/admin-home-page/admin-home-page.component';
import { AdminAddChefComponent } from './admin/admin-add-chef/admin-add-chef.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SectionAComponent,
    SectionBComponent,
    InfluencerCardComponent,
    ProductCardComponent,
    SectionCComponent,
    SectionDComponent,
    RecipeCardComponent,
    SearchPageComponent,
    NavBarComponent,
    RecipePageComponent,
    ChefPageComponent,
    AutocompleteFilterPipePipe,
    RecipeListComponent,
    StoreListComponent,
    CartPageComponent,
    CreateRecipeComponent,
    AdminHomePageComponent,
    AdminAddChefComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule,HttpClientModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
