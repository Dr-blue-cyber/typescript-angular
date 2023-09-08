import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { BooksModule } from './books/books.module';
import { TestModule } from './test/test.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule, 
    BooksModule, 
    TestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
