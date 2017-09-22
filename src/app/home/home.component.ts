import { Component, OnInit , Input} from '@angular/core';
import {CreateComponent} from '../create/create.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
@Input() myProducts;
products =[];

  constructor() { }

  ngOnInit() {
  }

}
