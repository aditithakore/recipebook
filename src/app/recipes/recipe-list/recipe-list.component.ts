import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{


  recipes: Recipe[]=[
  ]
  constructor(private recipeSerive:RecipeService, private router: Router, private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.recipeSerive.recipeChanged.subscribe((recipes: Recipe[]) => {
      this.recipes=recipes;
    })
    this.recipes= this.recipeSerive.getRecipes(); 

  }


  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo: this.route})
  }
}
