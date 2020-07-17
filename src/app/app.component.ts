import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Product {
  price: number;
  image: string;
  brand: string;
  description: string;
  id: number;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})


export class AppComponent  {

  
  products: any;
  filteredProducts: Product[];
  filterBy;
  palindrome;
  API = 'http://localhost:3001';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.filteredProducts = [];
  }

  filter() {         
      
    if(this.filterBy !== ''){
      this.http.get(`${this.API}/products/${this.filterBy}`)
      .subscribe(products => {
        console.log(products);
        this.products = products;
        this.filteredProducts = [...this.products];
      })
    }else{
      this.filteredProducts = [];
    }
      
    

  }
 
}
