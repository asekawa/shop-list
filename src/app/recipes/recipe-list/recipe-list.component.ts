import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes :Recipe []=[
    new Recipe("A test recipe",'This is simply a test'," https://c.pxhere.com/images/7a/68/166bae10efb2ba7e072ca553b907-1589195.jpg!s"),
    new Recipe("A test recipe",'This is simply a test'," https://c.pxhere.com/images/7a/68/166bae10efb2ba7e072ca553b907-1589195.jpg!s")
  ] ;
  constructor() { }

  ngOnInit(): void {
  }

}
