import { Component, OnInit} from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  product = {
    title:'',
    price:'',
    image:''
  }

  constructor(private _apiService: ApiService, private router: Router) {}

  onSubmit(createForm){
    this._apiService.create(this.product) ;
    this.product = {
      title:'',
      price:'',
      image:''
    }

    console.log("inside.submit x", this.product);
    this.router.navigate(['products']);
    // createForm.reset();

}
ngOnInit() {

    }
}
