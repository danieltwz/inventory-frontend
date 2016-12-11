import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Product } from '../shared/interfaces';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../shared/services';

@Component({
    selector: 'page-product-detail',
    templateUrl: './page-product-detail.component.html',
    styleUrls: ['./page-product-detail.component.css'],
})
export class PageProductDetailComponent implements OnInit {
   constructor(private http: Http,
   private activatedRoute: ActivatedRoute,
   private productService: ProductService) {

   }

   public product: Product;

   ngOnInit() {
       this.activatedRoute
       .params
       .subscribe( x => {
           const id = x['id'];
           this.getProduct(id);
           
       })
      
   }
   
   getProduct(id){
       this.productService.getProduct(id)
       .subscribe((result: Product) => {
           this.product = result;
    }, error => {
           console.log(error);
       });
   }
}
