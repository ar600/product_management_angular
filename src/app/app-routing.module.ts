import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductListComponent} from './product-list/product-list.component';
import {EditProductComponent} from './edit-product/edit-product.component';
import {CreateComponent} from './create/create.component';


const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'products',  component: ProductListComponent },
{ path: 'edit/:index',  component: EditProductComponent },
{ path: 'create',  component: CreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
