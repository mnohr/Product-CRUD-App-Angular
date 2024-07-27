import { Component} from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { Product } from '../../models/product.model';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [MatCardModule, MatChipsModule, MatProgressBarModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  longText = `The Chihuahua is a Mexican breed of toy dog. It is named for the
  Mexican state of Chihuahua and is among the smallest of all dog breeds. It is
  usually kept as a companion animal or for showing.`;
  productId!: number;
  product : Product = 
    {
      id: 1,
      name: 'harry',
      description: 'nice',
      price: 23423
    }

  constructor(private route: ActivatedRoute){

  } 
  ngOnInit(): void {
    this.productId =  +this.route.snapshot.paramMap.get('id')!;
    // TODO: get data from api for product id
    
  }

}
