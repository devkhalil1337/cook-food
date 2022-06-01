import { Component, Input, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.scss']
})
export class RecipePageComponent implements OnInit {

  reciepsList;
  title : string
  image : string
  description: string
  ingredients: Array<string>

  constructor(private commonService:CommonServiceService) { 
    this.reciepsList = this.commonService.getRecipiesByRecipeId;
    this.title =  this.reciepsList.name || ''
    this.image =  this.reciepsList.image || ''
    this.description =  this.reciepsList.descrition || ''
    this.ingredients =  this.reciepsList.ingredients || []
  }
  

  ngOnInit(): void {
  }
}
