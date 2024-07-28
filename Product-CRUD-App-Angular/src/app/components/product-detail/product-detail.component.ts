import { Component} from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { Product } from '../../models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../Services/product.service';
import { CurrencyFormatPipe } from "../../pipes/currency-format.pipe";
@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [MatCardModule, MatChipsModule, MatProgressBarModule, CurrencyFormatPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  productId!: number;
  product: Product = {
    id: 0,
    name: '',
    price: 0,
    description: ''
  };

  constructor(private route: ActivatedRoute,private productService: ProductService,private router: Router){

  } 
  ngOnInit(): void {
    this.productId =  +this.route.snapshot.paramMap.get('id')!;
    if(this.productId !== null){
      this.loadProductDetails(this.productId);
    }
    
  }

  loadProductDetails(id:number){
    this.productService.getProductById(id).subscribe(res => {
      this.product = res;
    })
  }

  back(){
    this.router.navigate(['/products']);
  }
}
