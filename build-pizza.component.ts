import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-build-pizza',
  templateUrl: './build-pizza.component.html',
  styleUrls: ['./build-pizza.component.css']
})
export class BuildPizzaComponent {
  ingredients: any[] = [];
  selected: boolean = false;
  ingTotalCost: number = 0;

  constructor(private api: ApiService, private cartService: CartService, private router: Router){}

  ngOnInit() {
    const selectedFromCart = this.cartService.getIngredients();
    this.api.getIngredients().subscribe(data => {
      this.ingredients = data.map((ing:any) =>({
        ...ing, selected : selectedFromCart.some((s:any) => s.id === ing.id)
      }));
    });
  }

  onCheckboxChange(ingredient: any){
    ingredient.selected = !ingredient.selected;

    if(ingredient.selected){
      this.ingTotalCost += ingredient.price;
    }else{
      this.ingTotalCost -= ingredient.price;
    }
  }

 buildPizza(){
  const selectedIngs = this.ingredients.filter(i => i.selected);
  this.cartService.setIngredients(selectedIngs);
  this.router.navigate(['/cart']);
 }

}
