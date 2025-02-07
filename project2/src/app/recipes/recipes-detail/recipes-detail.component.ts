import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.module';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-detail',
  standalone: false,
  
  templateUrl: './recipes-detail.component.html',
  styleUrl: './recipes-detail.component.css'
})
export class RecipesDetailComponent {

 @Input() recipe: Recipe;

 constructor(private recipeService: RecipeService) { }

 ngOnInit(): void {}  
 
 onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);

 }
}
