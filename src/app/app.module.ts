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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
