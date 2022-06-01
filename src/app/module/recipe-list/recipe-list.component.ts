import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CacheService } from 'src/app/services/cache.service';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  
  reciepsList;
  
  constructor(private router: Router,  private cacheService:CacheService,private commonService:CommonServiceService) { 
    this.reciepsList = this.commonService.getRecipiesByCategory;
  }

  ngOnInit(): void {
  }


  onRecipeDetails(id:any){
     this.router.navigateByUrl(this.cacheService.getCurrentURL()+ "/"+id);
  }

}
