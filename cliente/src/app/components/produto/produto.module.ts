
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoListComponent } from './produto-list/produto-list.component';
import { ProdutoCreateComponent } from './produto-create/produto-create.component';
import { ProdutoEditComponent } from './produto-edit/produto-edit.component';

@NgModule({
  declarations: [
    ProdutoListComponent,
    ProdutoCreateComponent,
    ProdutoEditComponent
  ],
  imports: [
    BrowserModule,
    ProdutoRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ProdutoModule { }
