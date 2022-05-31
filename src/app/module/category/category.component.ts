import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CacheService } from 'src/app/services/cache.service';
import { CategoryModel } from './category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @Input() title: string;
  @Input() categoriesList : Array<CategoryModel>;
  @Input() isCountry = false;
  @Input() isCategory = false;

  constructor(private router: Router,
    private cacheService:CacheService) { }

  ngOnInit(): void {
  }

  onOpen(category:any){
    if(this.isCountry){
      let countryName = category.name.toLowerCase();
      this.cacheService.setSelectedCountry(countryName);
      this.router.navigateByUrl(countryName)
    }
    else if(this.isCategory){
      let country = this.cacheService.getSelectedCountry()
      let categoryName = category.name.toLowerCase();
      this.router.navigateByUrl(`${country}/${categoryName}`)
    }
  }

}
