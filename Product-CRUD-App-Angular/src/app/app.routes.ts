import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';

export const routes: Routes = [
    { path: 'products', component: ProductListComponent},
    { path: 'products/:id', component: ProductDetailComponent},
    { path: 'products/:id/edit', component: ProductEditComponent},
    { path: '', redirectTo: '/products', pathMatch: 'full'}
];
