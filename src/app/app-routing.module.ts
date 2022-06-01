import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './module/country/country.component';
import { HomeComponent } from './module/home/home.component';
import { RecipeListComponent } from './module/recipe-list/recipe-list.component';
import { RecipePageComponent } from './module/recipe-page/recipe-page.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: '',
      component: HomeComponent
    },
    {
      path:':country',
      component:CountryComponent
    },
    {
      path:':country/:category',
      component:RecipeListComponent
    },
    {
      path:':country/:category/:id',
      component:RecipePageComponent
    }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
