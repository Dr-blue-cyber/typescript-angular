import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})

export class ProductManagerComponent {
  public products : any = [];

  constructor(){
    const xhr = new window.XMLHttpRequest(); 
    xhr.open("GET", "http://localhost:9001/products", true); // true = async

    // register function to receive response
    xhr.onload = () =>{
      const json = xhr.responseText; 
      this.products = JSON.parse(json)
    }
    xhr.send()
  }
}
