import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoCreateComponent } from './components/produto/produto-create/produto-create.component';
import { ProdutoListComponent } from './components/produto/produto-list/produto-list.component';
import { ProdutoEditComponent } from './components/produto/produto-edit/produto-edit.component';
import { ProdutoShowComponent } from './components/produto/produto-show/produto-show.component';

export const routes: Routes = [

  { path: '', redirectTo: 'produtos/list', pathMatch: 'full' },
 
  { path: 'produtos/list', component: ProdutoListComponent },

  { path: 'produtos/create', component: ProdutoCreateComponent },

  { path: 'produtos/show/:params', component: ProdutoShowComponent },
  
  { path: 'produtos/edit/:params', component: ProdutoEditComponent  },

  { path: 'produtos/delete/:params', component: ProdutoEditComponent  } 

  // { path: '**', '': 'Página de erro' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
