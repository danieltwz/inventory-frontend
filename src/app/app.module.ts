import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import 'rxjs/Rx';

//components
//import { HelloWorld1Component } from './hello-world';
import { AppComponent } from './app.component';
import { PageProductsComponent } from './page-products';
import { PageProductDetailComponent } from './page-product-detail';

//services
import { ProductService, ProductImplService } from './shared/services';

//routing
import { appRoutes } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    //HelloWorld1Component,
    PageProductsComponent,
    PageProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    { provide: ProductService, useClass: ProductImplService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
