import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoCreateComponent } from './components/produto/produto-create/produto-create.component';
import { ProdutoListComponent } from './components/produto/produto-list/produto-list.component';
import { ProdutoEditComponent } from './components/produto/produto-edit/produto-edit.component';
import { ProdutoShowComponent } from './components/produto/produto-show/produto-show.component';

export const routes: Routes = [

  { path: '', redirectTo: 'produto/list', pathMatch: 'full' },
 
  { path: 'produto/list', component: ProdutoListComponent },

  { path: 'produto/create', component: ProdutoCreateComponent },

  { path: 'produto/show/:params', component: ProdutoShowComponent },
  
  { path: 'produto/edit/:params', component: ProdutoEditComponent  } 

  // { path: '**', '': 'Página de erro' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
