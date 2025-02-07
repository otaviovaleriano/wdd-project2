import { Component } from '@angular/core';
import { Recipe } from './recipe.module';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  standalone: false,
  
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  providers: [RecipeService]
})
export class RecipesComponent {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }
  
  ngOnInit(): void {
    this.recipeService.recipeSelected
      .subscribe(
        (recipe: Recipe) => {
          this.selectedRecipe = recipe;
        }
      );
  }
}
