import {  Component } from '@angular/core';
import {  MatTableModule } from '@angular/material/table';
import { Product } from '../../models/product.model';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ProductService } from '../../services/product.service';
import { ProductSearchComponent } from '../product-search/product-search.component';
import { MatButtonModule } from '@angular/material/button';
import { CurrencyFormatPipe } from '../../pipes/currency-format.pipe';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule} from '@angular/material/paginator';
import { SharedModule } from '../../shared/shared.modules';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    MatTableModule,
    MatIconModule,
    ProductSearchComponent,
    MatButtonModule,
    CurrencyFormatPipe,
    CommonModule,
    MatPaginatorModule,
    SharedModule
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})

export class ProductListComponent{
  displayedColumns: string[] = [
    'id',
    'name',
    'description',
    'price',
    'actions',
  ];
  

  products: Product[] = [];
  filteredProducts: Product[] = [];
  errorMessage: string = '';

  constructor(private router: Router, private productService: ProductService,private snackBar: MatSnackBar) {
    
  }


  ngOnInit() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
      this.filteredProducts = products;
    },
    (error: string) => {
      this.errorMessage = error;
      this.snackBar.open(this.errorMessage, 'Close', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
    });

  }

  createProduct(path: string) {
    this.router.navigate([path]);
  }

  viewProduct(product: Product) {
    console.log('View product', product);
    this.router.navigate([`/products/${product.id}`]);
  }

  editProduct(product: Product) {
    console.log('Edit product', product);
    this.router.navigate([`/products/${product.id}/edit`]);
  }

  deleteProduct(product: Product): void {
    if (
      product.id !== null &&
      confirm('Are you sure you want to delete this product?')
    ) {
      this.productService.deleteProduct(product.id).subscribe(() => {
        this.filteredProducts = this.products.filter(
          (p) => p.id !== product.id
        );
      });
    }
  }

  onSearch(searchTerm: string): void {
    if (searchTerm) {
      this.filteredProducts = this.products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      this.filteredProducts = this.products;
    }
  }
}
