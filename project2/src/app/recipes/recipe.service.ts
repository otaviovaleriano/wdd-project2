import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.module";
import { Ingredient } from "../shared/ingredient.module";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Lasagna', 'This is simply a test', 'https://www.averiecooks.com/wp-content/uploads/2021/01/garlicbutterchicken-5.jpg', [new Ingredient('Meat', 1), new Ingredient('Cheese', 2)]),
        new Recipe('Steak & Shrimp', 'This is simply a test', 'https://www.averiecooks.com/wp-content/uploads/2021/01/garlicbutterchicken-5.jpg', [ new Ingredient('Meat', 1), new Ingredient('Shrimp', 3)]),
        new Recipe('Chocolate Cake', 'This is simply a test', 'https://www.averiecooks.com/wp-content/uploads/2021/01/garlicbutterchicken-5.jpg', [ new Ingredient('Chocolate', 2), new Ingredient('Flour', 1)]),
      ];
    

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
}

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}