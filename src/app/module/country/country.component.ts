import { Component, OnInit } from '@angular/core';
import { recipeCategories } from 'src/app/recipe-data/recipe-data';
import { CategoryModel } from '../category/category.model';
import { countryCategories } from './country.modal';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  countryCategories : Array<CategoryModel>;

  constructor() { }

  ngOnInit(): void {
    this.countryCategories  = recipeCategories
  }

}
