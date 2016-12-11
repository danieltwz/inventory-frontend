import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Product } from '../shared/interfaces';
import { Router } from '@angular/router';
import { ProductService } from '../shared/services';

@Component({
    selector: 'hello-world-1',
    templateUrl: './page-products.component.html',
    styleUrls: ['./page-products.component.css'],
})
export class PageProductsComponent implements OnInit {
   constructor(private http: Http,
   private router: Router,
   private productService: ProductService) {

   }
   
   public products: Product[];

   ngOnInit() {
       this.getProducts();
   }

   navigateTo(id: string) {
       this.router.navigate(['/products', id]);
   }

   getProducts() {
       this.productService.
       getProducts()
       .subscribe(result => {
           this.products = result;
           console.log(this.products);
       }, error => {
           console.log(error);
       });
   }
}
