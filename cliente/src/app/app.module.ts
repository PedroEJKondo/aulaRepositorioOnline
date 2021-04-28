import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProdutoCreateComponent } from './components/produto/produto-create/produto-create.component';
import { ProdutoEditComponent } from './components/produto/produto-edit/produto-edit.component';
import { ProdutoListComponent } from './components/produto/produto-list/produto-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProdutoListComponent,
    ProdutoCreateComponent,
    ProdutoEditComponent,
    ProdutoCreateComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule, 
    BrowserModule,
    FormsModule,
    NgbModule,
    RouterModule
  ], 
  bootstrap: [AppComponent] 
})
export class AppModule { }
