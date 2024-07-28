import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = `${environment.apiUrl}Products`;


  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.url}/`+ id);
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.url, product);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.url}/${product.id}`, product);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
