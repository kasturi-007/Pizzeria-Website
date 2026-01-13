import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(public cartService: CartService){}

  deleteItem(id: string){
    this.cartService.removeFromCart(id);
  }

  payment(){
    alert(`
      PAYMENT SUCCESSFUL!
      Pizza Total            :  ₹${this.cartService.getPizzaTotal()}
      Ingredients Total  :  ₹${this.cartService.getIngredientsTotal()}
      -------------------------------
      Grand Total          :  ₹${this.cartService.getGrandTotal()}
      
      Your order will be delivered under 45 minutes.
      Thank you for ordering from us!
      `);
      this.cartService.clearCart();
  }

  showIngredients: boolean = false;

  toggleIngredients(){
    this.showIngredients = !this.showIngredients;
  }

}
