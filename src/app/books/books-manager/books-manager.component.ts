import { Component,  } from '@angular/core';

@Component({
  selector: 'books-manager',
  templateUrl: './books-manager.component.html',
  styleUrls: ['./books-manager.component.css']
})
export class BooksManagerComponent {
  public books : any = [];

  constructor(){
    const xhr = new window.XMLHttpRequest(); 
    xhr.open("GET", "http://localhost:9001/books", true); // true = async

    // register function to receive response
    xhr.onload = () =>{
      const json = xhr.responseText; 
      this.books = JSON.parse(json)
    }
    xhr.send()
  }
}
