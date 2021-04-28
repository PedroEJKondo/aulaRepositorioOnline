import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoListComponent } from './components/produto/produto-list/produto-list.component';

export const routes: Routes = [

  { path: '', redirectTo: 'list', pathMatch: 'full' },
 
  { path: 'list', component: ProdutoListComponent },

  { path: 'create', component: ProdutoListComponent },

  { path: 'show/:params', component: ProdutoListComponent },
  
  { path: 'edit/:params', component: ProdutoListComponent  } 

  
  // {
  //   path: 'produtos',
  //   loadChildren: () =>
  //     import('./components/produto/produto.module').then(
  //       (m) => m.ProdutoModule
  //     ),
  // }
  // { path: '**', '': 'Página de erro' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
