import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoComponent } from './components/produto/produto.component';

export const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'produtos', 
    pathMatch: 'full'
  },
  {
    path: 'produtos',
    component: ProdutoComponent
  },
  {
    path: 'produtos/create',
    component: ProdutoComponent
  },
  {
    path: 'produtos/show/:id',
    component: ProdutoComponent
  },
  {
    path: 'produtos/edit/:id',
    component: ProdutoComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
