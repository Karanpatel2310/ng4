import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe-list/recipe.model' ;

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A New Recipe', 'Very Nice! Excellent', 'http://media2.sailusfood.com/wp-content/uploads/2013/08/crispy-onion-samosa-recipe.jpg'),
    new Recipe('A New Recipe', 'Very Nice! Excellent', 'http://media2.sailusfood.com/wp-content/uploads/2013/08/crispy-onion-samosa-recipe.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
