import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-order-pizza',
  templateUrl: './order-pizza.component.html',
  styleUrls: ['./order-pizza.component.css']
})
export class OrderPizzaComponent {
   pizzas: any[] = [];
   cartItems: any[] = [];

  constructor(private api: ApiService, private cartService: CartService){}

  ngOnInit(){
    this.api.getPizzas().subscribe(data => {
      this.pizzas = data;
      this.cartItems = this.cartService.getCartItems();
    });
  }

  isInCart(pizzaID: number){
    return this.cartItems.some(item => item.id === pizzaID);
  }

  toggleCart(pizza: any){
    if(this.isInCart(pizza.id)){
      this.cartService.removeFromCart(pizza.id);
    }else{
      this.cartService.addToCart(pizza);
    }
    this.cartItems = this.cartService.getCartItems();
  }

}
