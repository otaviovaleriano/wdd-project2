import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.module';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-list',
  standalone: false,

  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css'
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

}
