export interface CartItem {
  id : string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  type: 'veg'|'nonveg';

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: CartItem[] =[];
  private cartIngredients: any[] = [];
  private grandTotal: number = 0;

  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  addToCart(item: CartItem){
    const existing = this.cartItems.find(p => p.id === item.id);
    if (existing){
      existing.quantity++;
    }else{
      this.cartItems.push({...item, quantity: 1});
    }
  }

  removeFromCart(id: string){
    this.cartItems = this.cartItems.filter(item => item.id !== id);
  }

  setIngredients(items: any[]){
    this.cartIngredients = items;
  }

  getIngredients(){
    return this.cartIngredients;
  }

  increaseQty(id: string){
    const item = this.cartItems.find(i => i.id === id);
    if (item){
      item.quantity++;
    }
  }

  decreaseQty(id: string){
    const item = this.cartItems.find(i => i.id === id);
    if (item && item.quantity > 1){
      item.quantity--;
    }
  }

  isFreeBaseNeeded(): boolean {
    return this.cartItems.length === 0  && this.cartIngredients.length > 0;
  } 
  
  getIngredientsTotal():number {
    return this.cartIngredients.reduce((acc, ing) => acc + ing.price, 0);
  }

  getPizzaTotal(): number{
    return this.cartItems.reduce(
      (acc, item) => acc + (item.price * item.quantity), 0);
  }

  getGrandTotal(): number {
    return this.getPizzaTotal() + this.getIngredientsTotal();
  }

  clearCart(){
    this.cartItems = [];
    this.cartIngredients = [];
  }
}
