import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()

export class RecipeService{
    recipeSelected= new EventEmitter<Recipe>();
    recipeChanged= new EventEmitter<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe('pav-bhaji','pav-bhaji it is','https://brooklyndelhi.com/cdn/shop/articles/Brooklyn_Delhi_Recipes0208_Edit.webp?v=1674666690',[
            new Ingredient('pavbhaji',1),
            new Ingredient('pav',20),
        ]),
        new Recipe('pav-bhaji','pav-bhaji it is','https://brooklyndelhi.com/cdn/shop/articles/Brooklyn_Delhi_Recipes0208_Edit.webp?v=1674666690',[
            new Ingredient('pavbhaji',1),
            new Ingredient('pav',20),
        ])
    ];


    constructor(private slService: ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }


    getRecipe(index: number){
        return this.recipes[index];
    }
    addIngredientsToList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.emit(this.recipes.slice());
    }
    
    updateRecipe(index:number, newRecipe: Recipe){
        this.recipes[index]= newRecipe;
        this.recipeChanged.emit(this.recipes.slice());
    }

    deleteRecipe(index:number){
        this.recipes.splice(index,1);
        this.recipeChanged.emit(this.recipes.slice());
    }
}