import { Component, OnInit} from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
products=[];
product_id='';
product={
  title:'',
  price:'',
  image:''
}

constructor(private _route: ActivatedRoute, private _apiService: ApiService, private router: Router) {

       this._route.params.subscribe((param)=>{
       console.log("this is the param values",param.index);
       this.product_id = param.index;
       this.getProducts();
      this.product = this.products[this.product_id];
    });
  }
  onSubmit(){
    // console.log("we are inside onsubmit", this.product, this.products, this.product_id);
    this.router.navigateByUrl('/products');

  }

  ngOnInit() {

  }

  getProducts(){
    this.products=this._apiService.retreiveProducts();
  }


}
