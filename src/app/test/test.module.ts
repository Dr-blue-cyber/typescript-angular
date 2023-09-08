import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestManagerComponent } from './test-manager/test-manager.component';



@NgModule({
  declarations: [
    TestManagerComponent,
  ],
  exports:[
    TestManagerComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class TestModule { }
