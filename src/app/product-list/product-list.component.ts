import { Component, OnInit} from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
// @Output() myEvent = new EventEmitter;
products=[];

constructor(private _apiService: ApiService, private router: Router) {
  console.log("inside product list component constructor",this._apiService.products);
  this.products = this._apiService.products;
}
delete(index){
  // @sjc - removing a quote from a quotes array
  // let idx = this.product.indexOf(product);
  this.products.splice(index,1);
  console.log('inside delete');
}

edit(index){
  console.log('inside edit', index);
  // this._apiService.create(product);
  this.router.navigateByUrl('/edit/'+index);

}


  ngOnInit() {
    // this.products = this._apiService.retreiveProducts();
    // console.log("inside producttttt list component constructor",this.products);
  }

}
