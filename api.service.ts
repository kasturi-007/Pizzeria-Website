import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getPizzas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.BASE_URL}/pizzas`);
  }

  getIngredients(): Observable<any[]>{
    return this.http.get<any[]>(`${this.BASE_URL}/ingredients`);

  }
}
