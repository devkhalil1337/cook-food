import { Component, OnInit } from '@angular/core';
import { recipesCountries } from 'src/app/recipe-data/recipe-data';
import { CategoryModel } from '../category/category.model';
import { categories } from './home.modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categories: Array<CategoryModel>

  constructor() { }

  ngOnInit(): void {
    this.categories = recipesCountries
  }

}
