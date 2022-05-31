import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Input() recipeId:number

  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  onRecipeDetails(){
    // this.router.navigateByUrl(this.router.url+"/32");
  }

}
