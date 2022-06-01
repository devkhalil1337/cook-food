import { Injectable } from '@angular/core';
import { recipeCategories, recipes } from '../recipe-data/recipe-data';
import { CacheService } from './cache.service';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(private cacheService:CacheService) { }

  get getAllCategories(){
    return recipeCategories
  }

  get getAllRecipes(){
    return recipes
  }

  get getCurrentCountry(){
    return this.cacheService.getSelectedCategory();
  }

  get getCurrentCategory(){
    return this.cacheService.getSelectedCategory();
  }
  
  get getSelectedRecipe(){
    return this.cacheService.getSelectedRecipe();
  }

  //get all recipes by Id
  get getRecipiesByCategory(){
    let category = this.cacheService.getSelectedCategory();
    return this.getAllRecipes.filter(elm => elm.categoryId == category.id);
  }

  get getRecipiesByRecipeId(){
    let selectedRecipe = this.cacheService.getSelectedCategory();
    return this.getAllRecipes.filter(elm => elm.categoryId == selectedRecipe.id)[0];
  }

}
