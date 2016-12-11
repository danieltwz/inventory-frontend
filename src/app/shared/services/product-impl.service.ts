import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Product } from '../interfaces';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductImplService {
    constructor(private http: Http) {

    }
    private baseUrl = 'http://shangyilim-inventory.azurewebsites.net/api'
    getProducts(): Observable<Product[]> {
            const url = this.baseUrl + '/product';
            return this.http
                .get(url)
                .map(x => x.json());
        }

    getProduct(id) {
        const url = this.baseUrl + '/product/' + id;
        return this.http
        .get(url)
        .map( x => x.json());
    }
}