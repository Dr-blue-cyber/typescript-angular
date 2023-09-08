import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksManagerComponent } from './books-manager/books-manager.component';



@NgModule({
  declarations: [
    BooksManagerComponent
  ],
  exports: [
    BooksManagerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BooksModule { }
