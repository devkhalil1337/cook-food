import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {


  constructor() { }


  setSelectedCountry(country:string){
    localStorage.setItem("country",country);
  }
  
  getSelectedCountry(){
   return localStorage.getItem("country");
  }

  setSelectedCategory(category:string){
    localStorage.setItem("category",category);
  }
  
  getSelectedCategory(){
   return localStorage.getItem("category");
  }

}
