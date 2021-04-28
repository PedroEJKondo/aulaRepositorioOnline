import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoListComponent } from './produto-list/produto-list.component';

const routes: Routes = [ 
  {
    path: '',
    redirectTo: 'list'
  },
  {
    path: 'new',
    data: {
      breadcrumb: 'Novo Instituição'
    }
  },
  {
    path: 'list',
    component: ProdutoListComponent,
    data: {
      title: '',
      breadcrumb: 'Listar'
    }
  },
  {
    path: 'show/:sigla',
    // component: Produto,
    data: {
      title: 'Visão Geral',
      breadcrumb: 'Visualizar'
    }
  },
  {
    path: 'edit/:id',
    data: {
      title: 'Editar Instituição',
    }
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
