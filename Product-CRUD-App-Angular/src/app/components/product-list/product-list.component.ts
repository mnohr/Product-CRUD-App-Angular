import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Product } from '../../models/product.model';
import { Router } from '@angular/router';

const ELEMENT_DATA: Product[] = [
  {id: 1, name: 'Hydrogen', description: "3242dsdf", price: 23},
  {id: 2, name: 'Helium', description: "fgdfg32", price: 34},
  {id: 3, name: 'Lithium', description: "324", price: 90},
  {id: 4, name: 'Beryllium', description: "9.0122", price: 234}
];
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  displayedColumns: string[] = ['id', 'name', 'description', 'price'];
  dataSource = ELEMENT_DATA;

  constructor(private router: Router){

  }

  createProduct(path: string){
    this.router.navigate([path]);
  }
}
