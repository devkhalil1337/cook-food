import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './module/home/home.component';
import { CategoryComponent } from './module/category/category.component';
import { CountryComponent } from './module/country/country.component';
import { RecipeListComponent } from './module/recipe-list/recipe-list.component';
import { BackButtonDirective } from './directive/back-button.directive';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryComponent,
    CountryComponent,
    RecipeListComponent,
    BackButtonDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
