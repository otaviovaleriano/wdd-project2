import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.module';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  standalone: false,

  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {

  @ViewChild('nameInput', { static: true }) nameInputRef: ElementRef;
  //  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;
  @ViewChild('amountInput', { static: true }) amountInput: ElementRef;


  constructor(private slService: ShoppingListService) { }

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInput.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.slService.addIngredient(newIngredient);
    console.log('Added Ingredient - shopping edit compo');
    
   }

}
