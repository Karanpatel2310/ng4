import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe-list/recipe.model' ;

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('A New Recipe', 'Very Nice! Excellent', 'http://media2.sailusfood.com/wp-content/uploads/2013/08/crispy-onion-samosa-recipe.jpg'),
    new Recipe('Another New Recipe', 'Very Nice! Excellent', 'http://media2.sailusfood.com/wp-content/uploads/2013/08/crispy-onion-samosa-recipe.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
