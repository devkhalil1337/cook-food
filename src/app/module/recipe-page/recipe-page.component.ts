import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.scss']
})
export class RecipePageComponent implements OnInit {

  @Input() image : string
  @Input() description: string

  constructor() { }

  ngOnInit(): void {
  }
}
