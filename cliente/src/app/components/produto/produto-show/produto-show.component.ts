import { ProdutoService } from './../../../core/service/produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/Produto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produto-show',
  templateUrl: './produto-show.component.html',
  styleUrls: ['./produto-show.component.css']
})
export class ProdutoShowComponent implements OnInit {

  produto: Produto;
  nomeProduto: string;
  mensagem: boolean = false;

  constructor(
    private prodService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.produto = new Produto();
    this.getProduto(this.getId()); 
  }

  /** Retornar o id do produto que esta na URL */
  public getId() {
    let id: number;
    this.route.params.subscribe((parametros) => { id = parametros['params']; });
    return id;
  }

  /** Buscar o produto */
  public getProduto(id: number) {
    this.prodService
      .show(id)
      .subscribe(response => { this.produto = response.data; })
  }

  public eliminar(){
    this.prodService
      .delete(this.getId())
      .subscribe(response => { 
        this.router.navigate(['/']);
      })
  } 
}
