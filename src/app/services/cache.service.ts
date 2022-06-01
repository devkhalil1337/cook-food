import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {


  constructor() { }


  setSelectedCountry(country:any){
    localStorage.setItem("country",JSON.stringify(country));
  }
  
  getSelectedCountry(){
    return JSON.parse(localStorage.getItem("country") || '{}')
  }

  setSelectedCategory(category:any){
    localStorage.setItem("category",JSON.stringify(category));
  }
  
  getSelectedCategory(){
   return JSON.parse(localStorage.getItem("category") || '{}')
  }

  setSelectedRecipe(recipe:any){
    localStorage.setItem("recipe",JSON.stringify(recipe));
  }
  
  getSelectedRecipe(){
    return JSON.parse(localStorage.getItem("recipe") || '{}')
  }

  setCurrentURL(url:string){
    localStorage.setItem("CurrentURL",url);
  }
  
  getCurrentURL(){
   return localStorage.getItem("CurrentURL");
  }

}
