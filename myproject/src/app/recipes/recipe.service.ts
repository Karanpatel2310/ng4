import { Injectable } from '@angular/core';
import { Recipe } from './recipe-list/recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe(
      'A New Recipe',
      'Very Nice! Excellent',
      'http://media2.sailusfood.com/wp-content/uploads/2013/08/crispy-onion-samosa-recipe.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Franch Fries', 20)
      ]),
    new Recipe(
      'Another New Recipe',
      'Very Nice! Excellent',
      'http://media2.sailusfood.com/wp-content/uploads/2013/08/crispy-onion-samosa-recipe.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Franch Fries', 20)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes.slice()[index];
    // return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
