import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/Produto';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from './../../../core/service/produto.service';

@Component({
  selector: 'app-produto-edit',
  templateUrl: './produto-edit.component.html',
  styleUrls: ['./produto-edit.component.css']
})
export class ProdutoEditComponent implements OnInit {

  produto: Produto;
  nomeProduto: string;
  mensagem: boolean = false;

  constructor(
    private prodService: ProdutoService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.produto = new Produto();
    this.getProduto(this.getId());
  }

  /** Retornar o id do produto que esta na URL */
  public getId() {
    let id: number;
    this.route.params.subscribe((parametros) => {
      id = parametros['params'];
    });
    return id;
  }

  /** Buscar o produto */
  public getProduto(id: number) {
    this.prodService
      .show(id)
      .subscribe(response => {
        this.produto = response.data;
      })
  }

  /** Cadastrar o formulário */
  onSubmit() {
    this.prodService
      .put(this.produto,this.getId())
      .subscribe(response => {
        this.nomeProduto = response.nome;
        this.mensagem = true;
        this.onReload();
      });
  }

  /** Reiniciar o formulário */
  onReload() {
    this.ngOnInit();
  }
}
