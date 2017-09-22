import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs';


@Injectable()
export class ApiService {
  products = [];

  constructor() { }

  create(product){
    this.products.push(product);
    // return this.products;
    console.log("inside crate ine api.service",this.products[0].title);

  }

  retreiveProducts(){
    return this.products;
  }
}
