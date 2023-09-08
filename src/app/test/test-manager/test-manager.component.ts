import { Component } from '@angular/core';

@Component({
  selector: 'test-manager',
  templateUrl: './test-manager.component.html',
  styleUrls: ['./test-manager.component.css']
})
export class TestManagerComponent {
  public ques : any = [];

  check(Q : any){
    Q.showOptions =  !Q.showOptions;
  }
 

  constructor(){
    const xhr = new window.XMLHttpRequest(); 
    xhr.open("GET", "http://localhost:9001/test", true); // true = async

    // register function to receive response
    xhr.onload = () =>{
      const json = xhr.responseText; 
      this.ques = JSON.parse(json); 

      for (let que of this.ques){     //adding new ket to the object dynamically
        que.showOptions = false;
      }
    };

    xhr.send()
  }
}
