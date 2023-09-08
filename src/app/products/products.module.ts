import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductManagerComponent } from './product-manager/product-manager.component';



@NgModule({
  declarations: [       // to make components part of the module
  
    ProductManagerComponent
  ],
  exports: [
    ProductManagerComponent
  ],
  imports: [          // to import other modules so that their compounents can be used

    CommonModule
  ]
})
export class ProductsModule { }
